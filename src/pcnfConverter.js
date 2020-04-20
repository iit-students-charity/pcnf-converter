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
  let results = table.get('result');
  for (let i = 0; i < results.length; i++) {
    if (results[i] === 0) {
      pcnf += '(';
      table.forEach((values, key) => {
        if (key !== 'result') {
          if (values[i] === 1) {
            pcnf += `!${key} & `;
          } else {
            pcnf += `${key} & `;
          }
        }
      });
      pcnf = pcnf.slice(0, -3)
      pcnf += ') | ';
    }
  }
  pcnf = pcnf.slice(0, -3)

  return pcnf;
}

exports.convert = convert;
