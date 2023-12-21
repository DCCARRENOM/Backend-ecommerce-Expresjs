class categoriesService {
  constructor(){

  }

  findOne(categoryId, productId){
    return ({
      categoryId,
      productId,
    })
  }
}

module.exports = categoriesService;
