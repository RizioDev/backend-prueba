function setHeaders (req, res, next) {                                      // seteo de headers
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // matcheo con el dominio del front
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); //headers que dejo q utilice (le digo al backend che vos podes utlizar este tipo de headers)
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next(); //llamo a next para que no muera la ejecucion 
  };

  module.exports = setHeaders;