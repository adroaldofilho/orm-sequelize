import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

const port = 3030;

app.get('/teste', (req, res) => res
    .status(200)
    .send({ mensagem: 'Boas vindas à API!' 
}))

app.listen(port, () => console.log(`Servidor está rodando na porta ${port}`));

export default app;