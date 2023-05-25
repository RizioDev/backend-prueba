const { Country, Activity } = require("../db");
const { Op } = require("sequelize");
const { data } = require("../../utils/helpers/axiosRequest");

const getCountry = async (req, res) => {
  const { name, order } = req.query;

  const hay = await Country.findAll();

  const apiCountries = await data();

  if (!hay.length) {
    await Country.bulkCreate(apiCountries);
  }

  if (name) {
    // select * from "Countries" where name = $name;
    Country.findAll({
      include: {
        model: Activity,
      },
      // Retorna los countries coincidentes por el name, el name en spanish o el id de 3 letras
      where: {
        [Op.or]: {
          //op or, dice que traiga verificando si el id de la base de datos es igual al name O si el name de la db es igual al name O si el nameSpanish es igual al name pasado por query
          id: {
            [Op.iLike]: name,
          },
          name: {
            [Op.iLike]: `%${name}%`, //que contenga name, %name que empiece con name, name% que termine con name
          },
          nameSpanish: {
            [Op.iLike]: `%${name}%`,
          },
        },
      },
    })
      .then((pais) => {
        // Da como respuesta todos los countries coincidentes
        return res.status(200).json(pais.length >= 1 ? pais : []);
      })
      .catch((error) => {
        res.send(error);
      });
  } else {
    if (!order) {
      Country.findAll({
        include: {
          model: Activity,
        },
        order: [["nameSpanish", "ASC"]],
      })
        .then((pais) => {
          res.status(200).json(pais.length >= 1 ? pais : []);
        })
        .catch((error) => {
          res.send(error);
        });
    } else {
      switch (order) {
        case "AZ":
          // console.log('estoy funcando')
          Country.findAll({
            include: {
              model: Activity,
            },
            order: [["name", "ASC"]],
          })
            .then((pais) => {
              res.status(200).json(pais.length >= 0 ? pais : []);
            })
            .catch((error) => {
              res.send(error);
            });
          break;
        case "ZA":
          Country.findAll({
            include: {
              model: Activity,
            },
            order: [["name", "DESC"]],
          })
            .then((pais) => {
              res.status(200).json(pais.length >= 0 ? pais : []);
            })
            .catch((error) => {
              res.send(error);
            });
          break;
        case "PopLowToHigh":
          Country.findAll({
            include: {
              model: Activity,
            },
            order: [["population", "ASC"]],
          })
            .then((pais) => {
              res.status(200).json(pais.length >= 0 ? pais : []);
            })
            .catch((error) => {
              res.send(error);
            });
          break;
        case "PopHighToLow":
          Country.findAll({
            include: {
              model: Activity,
            },
            order: [["population", "DESC"]],
          })
            .then((pais) => {
              res.status(200).json(pais.length >= 0 ? pais : []);
            })
            .catch((error) => {
              res.send(error);
            });
          break;
        default:
          Country.findAll({
            include: {
              model: Activity,
            },
            order: [["name", "ASC"]],
          })
            .then((pais) => {
              res.status(200).json(pais.length >= 0 ? pais : []);
            })
            .catch((error) => {
              res.send(error);
            });
          break;
      }
    }
  }
};

const getCountry2 = async (id) => {
  try {
    const pais = await Country.findAll({
      include: {
        model: Activity,
      },
      where: { id },
    });
    return pais;
  } catch (error) {
    console.log(error);
  }
};

const getById = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const pais = await Country.findAll({
    include: Activity,
    where: {
      id: id.toUpperCase(),
    },
  })
    .then((pais) => {
      res
        .status(200)
        .json(pais.length > 0 ? pais[0] : ["No existe ningún país con ese Id"]);
    })
    .catch((error) => res.status(404).json(error));
};

module.exports = {
  getCountry,
  getById,
  getCountry2,
};
