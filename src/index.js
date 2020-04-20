const express = require('express');
const pug = require('pug');
const url = require('url');

const convert = require('./logicRunner')
const generateFormula = require('./formulaGenerator')

const app = express();
const port = 3000;

function serialize(table) {
  result = '';
  table.forEach((value, key) => {
    result += key + ': ' + value.toString() + '<br>';
  })
  return result;
}

function mapToObject(map) {
  return Array.from(map).reduce((obj, [key, value]) => (
    Object.assign(obj, { [key]: value })
  ), {});
}

app.use(express.urlencoded())

app.get('/', (req, res) => {
  res.send(pug.renderFile('src/views/navigation.pug', {}));
})

app.get('/formula-test', (req, res) => {
  formula = generateFormula(0.5)
  res.send(pug.renderFile('src/views/formulaTest.pug', {formula: formula}));
})

app.get('/pcnf-test', (req, res) => {
  formula = generateFormula(0)
  res.send(pug.renderFile('src/views/pcnfTest.pug', {formula: formula}));
})

app.get('/convert', (req, res) => {
  res.send(pug.renderFile('src/views/convert.pug', {}));
});

app.post('/convert', (req, res) => {
  result = convert(req.body.formula)
  res.json({
    result: result.pcnf,
    table: mapToObject(result.table),
    error: result.error
  })
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
