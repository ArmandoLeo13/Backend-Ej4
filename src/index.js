
const { response } = require('express');
const express = require('express');
const productosRouter = require('./routers/productos');

const userRouter = require('./routers/productos');

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api/productos', productosRouter);

app.listen(port, ()=>{
    
});

app.on('error', (error) => {
  response.end(error);
})
;