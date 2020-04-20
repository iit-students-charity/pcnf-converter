const operations = ["&", "|", "->", "~"]
const symbols = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ10"]
const unaryChance = 0.25
const recursionChance = 0.25

function generateFormula(errorChance) {
  if (fortuna(unaryChance)) {
    return unary(errorChance)
  } else {
    return binary(errorChance)
  }
}

function unary(errorChance) {
  if (fortuna(errorChance)){
    return randomElement([
      `!(${generate(errorChance / 2)})`,
      `!${generate(errorChance / 2)}`
    ])
  } else {
    return `(!${generate(errorChance / 2)})`
  }
}

function binary(errorChance) {
  if (fortuna(errorChance)){
    return randomElement([
      `${generate(errorChance / 2)}${randomElement(operations)}${generate(errorChance / 2)}`,
      `(${generate(errorChance / 2)}${randomElement(operations)}${randomInt(7) + 1})`,
      `(${randomInt(7) + 1}${randomElement(operations)}${generate(errorChance / 2)})`,
    ])
  } else {
    return `(${generate(errorChance / 2)}${randomElement(operations)}${generate(errorChance / 2)})`
  }
}

function generate(errorChance) {
  if (fortuna(recursionChance)) {
    return generateFormula(errorChance)
  } else {
    return randomElement(symbols)
  }
}

function randomElement(array) {
  return array[randomInt(array.length - 1)]
}

function randomInt(number) {
  return Math.floor(Math.random() * (number + 1));
}

function fortuna(chance) {
  return randomInt(100) < (chance * 100)
}

module.exports = generateFormula;
