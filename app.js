const express = require('express');
const app = express();
const port = 3000

app.use(express.json());

app.get('/get-service', function getService(req,res) {
  res.send('OK');

})

app.post('/add-service',(req,res)=>{
  const product = req.body;
  console.log(product.name)
  res.json(product)
})

  app.listen(port,() => {
    console.log("Server running on port: " + port);
})
app.delete('/update-service',(req,res)=>{
  const product = req.body;
  console.log(product.name)
  res.json(product)
})
app.put('/put-service',(req,res)=>{
  const product = req.body;
  console.log(product.name)
  res.json(product)
})



