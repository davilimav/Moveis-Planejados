const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "vergueirolimadavi@gmail.com",
    pass: "cfgc djno lvbe kzco"
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

      from: "vergueirolimadavi@gmail.com",

      to: "vergueirolimadavi@gmail.com",

      subject: "Novo orçamento - Móveis Videira",

      text: `
NOVO ORÇAMENTO

Nome: ${nome}

Telefone: ${telefone}

Tipo de Ambiente: ${ambiente}

Estilo Desejado: ${estilo}

Cor Predominante: ${cor}

Faixa de Investimento: ${investimento}

Prazo Desejado: ${prazo}
      `

    });

    res.json({
      ok: true
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      ok: false
    });

  }

});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});