import React from "react";
import { Link } from "react-router-dom";
import s from "./Card.module.css";

export const Card = ({ name, img, code, continent, population }) => {
  return (
    <div>
      <div className="countries">
        <h3
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {name}
        </h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className={s.countryimg}
            src={img}
            alt="imagen no encontrada"
            width="300px"
            height="200px"
          />
        </div>
        <div className={s.countryInfo}>
          <p>
            <span>Codigo:</span> {code}
          </p>
          <p>
            <span>Continente</span>: {continent}
          </p>
          <p>
            <span>Poblacion:</span> {population}
          </p>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={`/countries/${code}`}
            className={s.button}
          >
            More info...
          </Link>
        </div>
      </div>
    </div>
  );
};
