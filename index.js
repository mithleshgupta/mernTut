require("dotenv").config();
const productController = require("./Controller/product");
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const server = express();
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
server.use(express.json()); // helps to read json format
server.use(express.static(process.env.PUBLIC_DIR));
server.use("/products", productRouter.router);
server.use("/users", userRouter.router);

console.log("env", process.env.DB_PASS);

// db connection code
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
  console.log("database connected");
}

// server.use((req,res,next)=>{
//     console.log(req.method, req.op, req.hostname,req.get('User-Agent'),new Date())
//     next()
// })

// const auth = (req,res,next)=>{
//     console.log(req.query)
//     if(req.body.password=='123'){
//         next()
//     }
//     else{
//         res.sendStatus(401);
//     }
// }

// server.use(auth) THIS APPLIES AUTH TO ALL RQUESTS, SUPPOSE WE NEED TO APPLY THIS ONLY TO GET, IS SOME
// USER WANTS TO READ SOME PAGE ON NET , SO IT CAN BE RESTRICTED BY USING AUTH ON GET REQ, WE MAY NOT WANT TO USE IT EVERYWHERE
//API - ENDPOINT/ROUTES
//READ GET/PRODUCTS
// server.get('/products',(req,res)=>{
//     res.json(products)
// })

// READ /GET/PRODUCTS/ID

//USING MVC
//productRouter.get('/products/:id',productController.getProduct)

// server.get('/products/:id',(req,res)=>{
//     const id = +req.params.id;
//     const product = products.find(p=>p.id===id)
//     res.json(product)

// })

//server.get('/products',productController.getProducts)

//CREATE POST / PRODUCTS
//USING MVC , USING POST METHOD

//server.post('/products',productController.createProduct)

// server.post('/products',(req,res)=>{
//     console.log(req.body)
//     products.push(req.body)
//     res.json(req.body)
// })
//UPDATE /PRODUCTS/PUT

//USING MVC, FOR PUT METHOD

//server.put('/products/:id',productController.putProducts)
// server.put('/products/:id',(req,res)=>{
//     const id = +req.params.id;
//     const productIndex = products.findIndex(p=>p.id===id)
//     products.splice(productIndex,1,{...req.body,id:id})
//     res.status(201).json();
// })
//USING MVC, DELETE METHOD
//server.delete('/products/:id',productController.deleteProduct)
// server.delete('/products/:id',(req,res)=>{
//     const id = +req.params.id;
//     const productIndex = products.findIndex(p=>p.id===id)
//     const product = products[productIndex];
//     products.splice(productIndex,1)
//     res.status(201).json(product)
// })

//UPDATE /PRODUCTS/PATHC
//server.patch('/products/:id',productController.patchProduct)
// server.patch('/products/:id',(req,res)=>{
//     const id = +req.params.id;
//     const productIndex = products.findIndex(p=>p.id===id)
//     const product = products[productIndex];
//     products.splice(productIndex,1,{...product,...req.body})
//     res.status(201).json()
// })

// server.get('/demo',(req,res)=>{
//     //res.json(products)
//     //res.send("<h1>hello</h1>")
//     //res.sendFile("C:/Users/ankit/Desktop/MERN/index.html")
// })

server.listen(process.env.PORT, () => {
  console.log("Server Started on the first screen");
});
