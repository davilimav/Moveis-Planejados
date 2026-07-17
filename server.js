require("dotenv").config({
    quiet:true
});
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});


const transporter = nodemailer.createTransport({

  service: "gmail",

auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
}

});



app.post("/enviar", async (req, res) => {


  console.log("Recebi:", req.body);



  const {

    nome,
    telefone,
    ambiente,
    estilo,
    cor,
    investimento,
    prazo

  } = req.body;




  try {


    await transporter.sendMail({


      from: "videiramoveis01@gmail.com",


      to: "videiramoveis01@gmail.com",


      subject: "Novo orçamento - Móveis Videira",



      text: `

NOVO ORÇAMENTO - MÓVEIS VIDEIRA


Nome:
${nome}


Telefone:
${telefone}


Tipo de Ambiente:
${ambiente}


Estilo Desejado:
${estilo}


Cor Predominante:
${cor}


Faixa de Investimento:
${investimento}


Prazo Desejado:
${prazo}

      `


    });



    res.json({

      ok:true

    });



  } catch(error){


    console.log(error);


    res.status(500).json({

      ok:false

    });


  }


});





app.listen(3000,()=>{


  console.log("Servidor rodando na porta 3000");


});