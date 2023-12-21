const boom = require('@hapi/boom');

function validatorHandler(schema, property){
  return (req, res, next) =>{
    const data = req[property];
    const { error } = schema.validate(data, {abortEarly: false});
    if(error){
      next(boom.badRequest(error));
    }
    next();
  }
}
//CONSTRUYE MIDDLEWARES DE FORMA DINAMICA (closures)

module.exports = validatorHandler;
