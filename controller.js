var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var StoryModel = require('./storyShema');

//conectando com o mongoDB
var query = "mongodb+srv://ygordev:31012523@cluster0.csu6v.mongodb.net/diarioNode?retryWrites=true&w=majority"

const db = (query);
mongoose.Promise = global.Promise;

mongoose.connect(db, { useNewUrlParser: true, useunifiedtopology: true }, function (error) {
  if (error) {
    console.log("Error!" + error);
  }
});

router.get('/', async (req, res) => {
  try {
    const story = await StoryModel.find()
    return res.send({ story });
  } catch (err) {
    return res.send(400).send({ error: "ERRO NA BUSCA" })
  }
})
router.post('', async (req, res) => {

  try {
    const story = await StoryModel.create(req.body);

    return res.send({ story });
  } catch (err) {

    return res.status(400).send({ error: "SUA PAGINA DO DIÁRIO NÃO FOI ESCRITA DA FORMA CORRETA" });
  }
});


router.put('/:id', async (req, res) => {
  try {
    const bookId = req.params.id
    const story = await StoryModel.findByIdAndUpdate(bookId, req.body);

    return res.send({ story });
  } catch (err) {
    return res.status(400).send({ error: "EDIÇÃO DE DIÁRIO FALHOU" })
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const bookId = req.params.id
    const story = await StoryModel.findByIdAndDelete(bookId, req.body)
    return res.send({ story });
  } catch (err) {
    return res.status(400).send({ error: "Não foi possível arrancar essa pagina do seu diário" })

  }
})

module.exports = router;


