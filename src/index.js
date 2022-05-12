require('dotenv').config();
const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
const himalaya = require("himalaya");
const util = require("util");

const filter = require("./middlewares/basic-filter");


let g1 = axios.get('https://g1.globo.com')
  .then(function (res) {
   
    let json = himalaya.parse(res.data);
    let head, body;
    head = json[1].children[1].children;
    body = json[1].children[3].children;
    
    //console.log(head);

    //let temp = filter(body, "div")
    //console.log(temp)

    console.log(util.inspect(body, {showHidden: false, depth: 1, colors: true}))
    console.log("------- end server -------");
  })
  .catch(function (error) {
    console.log(error);
  });


const port = 8080;
app.listen(port, () => {
    console.log(`Servidor rodando na ${port}`);
})