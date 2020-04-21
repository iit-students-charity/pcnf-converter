function convert(statement) {
  let map = getInitialMap(statement.atoms);
  let table = apply(statement, map);
  return { pcnf: buildPcnf(table), table: table, error: false };
};

function getInitialMap(atoms) {
  map = new Map();

  for (let i = 0; i < atoms.length; i++) {
    map.set(atoms[i], []);
    let acc = Math.pow(2, i);
    let counter = 0;
    let value = 0;
    for (let j = 0; j < Math.pow(2, atoms.length); j++) {
      if (counter == acc) {
        value = value ? 0 : 1;
        counter = 0;
      }
      map.get(atoms[i]).push(value);
      counter++;
    }
  }

  map.set('result', [])
  return map;
};

function apply(statement, map) {
  for (let i = 0; i < Math.pow(2, statement.atoms.length); i++) {
    iterationMap = new Map();
    map.forEach((values, key) => {
      if (key !== 'result') {
        iterationMap.set(key, values[i]);
      }
    })

    let result = applyFormula(statement.formula, iterationMap);
    map.get('result').push(result)
  }

  return map;
}

function applyFormula(formula, values) {
  switch(formula.type) {
  case 'binary':
    return applyBinary(formula, values);
  case 'unary':
    return applyUnary(formula, values);
  case 'const':
    return formula.value;
  case 'atom':
    return values.get(formula.name);
  }
}

function applyUnary(formula, values) {
  return !applyFormula(formula.target, values) ? 1 : 0;
}

function applyBinary(formula, values) {
  let left = applyFormula(formula.left, values);
  let right = applyFormula(formula.right, values);

  switch(formula.operation) {
  case 'disjunction':
    return left || right;
  case 'conjunction':
    return left && right;
  case 'equivalent':
    return left === right ? 1 : 0;
  case 'implication':
    return implication(left, right);
  }
}


function implication(left, right) {
  if (right === 1) {
    return 1;
  } else if (left === 0) {
    return 1;
  } else {
    return 0;
  }
}

function buildPcnf(table) {
  let pcnf = '';
  let firstIteration = true

  let falseCount = table.get('result').filter((v) => v === 0).length;
  for (let i = 0; i < falseCount - 1; i++) {
    pcnf += "(";
  }

  for (let i = 0; i < table.get('result').length; i++) {
    if (table.get('result')[i] === 1) continue;

    if (!firstIteration) pcnf += "&";
    pcnf += buildBlock(table, i);
    if (!firstIteration) pcnf += ")";
    firstIteration = false;
  }

  return pcnf;
}

function buildBlock(table, index) {
  let block = {};
  table.forEach((array, atom) => {
    if (atom === 'result') return;
    atomBlock = {};
    atomBlock[atom] = array[index];
    Object.assign(block, atomBlock);
  })

  let result = '';
  let entries = Object.entries(block);

  for (let i = 0; i < entries.length - 1; i++) {
    result += "(";
  }

  let firstIteration = true
  for (let [atom, value] of entries) {
    if (!firstIteration) result += '|';
    if (value === 1) {
      result += `(!${atom})`;
    } else {
      result += atom;
    }
    if (!firstIteration) result += ')';

    firstIteration = false;
  }

  return result;
}

exports.convert = convert;
