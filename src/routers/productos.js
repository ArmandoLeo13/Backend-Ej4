const { Router, response } = require('express');

const productosRouter = Router();


class Productos {

    constructor (title,price,thumnail,id){
        this.title=title;
        this.price=price;
        this.thumnail=thumnail;
        this.id=id;
    }
    
    
}

let database = [
    { id: 1, title: 'Gaseosa', price:350, thumnail: '' },
    { id: 2, title: 'Galletas', price:350, thumnail: ''}
  ];

productosRouter.get('/', (request, res) => {
  res.json(database);
});

productosRouter.get('/:id', (request, response) => {
  const user = database.find((item) => item.id === parseInt(request.params.id));
  if (!user) {
    response.json({
      error: 'producto no encontrado'
    });

  } else {
    response.json(user);
  }
});

productosRouter.post('/', (request, response) => {
  const newProduct = new Productos(request.body.title,request.body.price,request.body.thumnail,database.length+1)

  database.push(newProduct);
  response.json(newProduct);
});

productosRouter.delete('/:id', (request, response) => {
  const productToDeleteIndex = database.findIndex((item) => item.id === parseInt(request.params.id));
  
  const producto = database.splice(productToDeleteIndex, 1);
  console.log(producto);
  response.json(producto);
});

productosRouter.put('/:id', (request, response) => {
  const productoToUpdateIndex = database.findIndex((item) => item.id === parseInt(request.params.id));
  
  database.splice(productoToUpdateIndex, 1, request.body);

  response.json(request.body);
});

module.exports = productosRouter;