require('dotenv').config();
const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
const himalaya = require("himalaya");


let g1 = axios.get('https://g1.globo.com')
  .then(function (res) {
   
    let json = himalaya.parse(res.data);
    let doctype, html, head, body;

    doctype = json[0];
    html = json[1];
    head = json[1].children[1];
    body = json[1].children[2];    
    //console.log(head);


    console.log(html)
    console.log("------- end server -------");
  })
  .catch(function (error) {
    console.log(error);
  });


const port = 8080;
app.listen(port, () => {
    console.log(`Servidor rodando na ${port}`);
})