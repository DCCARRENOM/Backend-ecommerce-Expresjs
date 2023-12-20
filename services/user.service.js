class usersService {
  constructor(){

  }

  find(limit,offset){
    if (limit && offset) {
      return({
        limit,
        offset,
      });
    } else {
      return ('No hay parametros');
    }
  }
}

module.exports = usersService;
