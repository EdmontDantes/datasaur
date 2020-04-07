/********************
 * HELPER FUNCTIONS *
 ********************/
const makeDino = function (speciesName, period, diet, notExtinct = false) {
  
  const dino = {
    species: speciesName,
    period: period,
    carnivore: diet,
    extinct: notExtinct,
  }

  return dino;
}

const makeSingular = function (dino) {
  const copyOfDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct)
    

    if (copyOfDino.species.endsWith('us') === true) {
    copyOfDino.species = copyOfDino.species.slice(0, -2);
    }

  return copyOfDino;
}


const truncateSpecies = function (dino) {
  const copyOfDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct);

  if (copyOfDino.species.length > 10) {
    copyOfDino.species = `${copyOfDino.species.substr(0, 7)}...`;
  }
  return copyOfDino;
}

const makeExtinct = function (dino) {
  const copyOfDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct);

  if (copyOfDino.extinct === false || copyOfDino.extinct === true) {
    copyOfDino.extinct = true;
  }
  return copyOfDino;
}

const isCarnivore = function (dino) {
  const copyOfDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct);
  return copyOfDino.carnivore;

  
}

const isExtinct = function (dino) {
  const copyOfDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct);

  return copyOfDino.extinct;
}


const isTriassic = function (dino) {
  const copyOfDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct);

  if (copyOfDino.period === 'Triassic') {
    return true;
  } else {
    return false;
  }
}

const isJurassic = function (dino) {
  const copyOfDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct);

  if (copyOfDino.period === 'Jurassic') {
    return true;
  } else {
    return false;
  }
}

const isCretaceous = function (dino) {
  const copyOfDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct);

  if (copyOfDino.period === 'Cretaceous') {
    return true;
  } else {
    return false;
  }
}

const isFirstAlphabeticallyBySpecies = function (dino1, dino2) {
  const copyOfDino1 = makeDino(dino1.species, dino1.period, dino1.carnivore, dino1.extinct);
  const copyOfDino2 = makeDino(dino2.species, dino2.period, dino2.carnivore, dino2.extinct);

  if (copyOfDino1.species > copyOfDino2.species) {
    return 1;
  } else if (copyOfDino1.species < copyOfDino2.species) {
    return -1;
  } else  {
    return 0;
  }
}

const extinctIsLast = function (dino1, dino2) {
  const copyOfDino1 = makeDino(dino1.species, dino1.period, dino1.carnivore, dino1.extinct);
  const copyOfDino2 = makeDino(dino2.species, dino2.period, dino2.carnivore, dino2.extinct);

  if (copyOfDino1.extinct > copyOfDino2.extinct) {
    return 1;
  } else if (copyOfDino1.extinct < copyOfDino2.extinct) {
    return -1;
  } else  {
    return 0;
  }
}

const carnivoreIsFirst = function (dino1, dino2) {
  const copyOfDino1 = makeDino(dino1.species, dino1.period, dino1.carnivore, dino1.extinct);
  const copyOfDino2 = makeDino(dino2.species, dino2.period, dino2.carnivore, dino2.extinct);

  if (copyOfDino1.carnivore < copyOfDino2.carnivore) {
    return 1;
  } else if (copyOfDino1.carnivore > copyOfDino2.carnivore) {
    return -1;
  } else  {
    return 0;
  }
}

const isInPeriodOrder = function (dino1, dino2) {
  const copyOfDino1 = makeDino(dino1.species, dino1.period, dino1.carnivore, dino1.extinct);
  const copyOfDino2 = makeDino(dino2.species, dino2.period, dino2.carnivore, dino2.extinct);

  if (dino1.period === 'Jurassic' && dino2.period === 'Triassic') {
    return 5;
  } else if (dino1.period === 'Cretaceous' && dino2.period === 'Triassic') {
    return 5;
  } else if (dino1.period === 'Cretaceous' && dino2.period === 'Jurassic') {
    return 5;
  } else if (dino1.period === 'Jurassic' && dino2.period === 'Cretaceous') {
    return -5;
  } else if (dino1.period === 'Triassic' && dino2.period === 'Cretaceous') {
    return -5;
  } else if (dino1.period === 'Triassic' && dino2.period === 'Jurassic') {
    return -5;
  } else {
    return 0;
  }
}


/***********************
 * ITERATION FUNCTIONS *
 **********************/

const singularizeDinos = function (dinos) {
  return dinos.map(makeSingular);
}

const truncateDinos = function (dinos) {
  return dinos.map(truncateSpecies);
}

const makeAllExtinct = function (dinos) {
  return dinos.map(makeExtinct);
}

const carnivoresOnly = function (dinos) {
  return dinos.filter(isCarnivore);
}

//helper function  for herbivoresOnly
const isHerbivore = function (dino) {
  const copyOfDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct);
  if (copyOfDino.carnivore === false)
  return copyOfDino;
}
const herbivoresOnly = function (dinos) {
  return dinos.filter(isHerbivore)
  }

const extinctOnly = function (dinos) {
  return dinos.filter(isExtinct);
}

//helper function  for herbivoresOnly
const isNotExtinct = function (dino) {
  const copyOfDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct);
  if (copyOfDino.extinct === false)
  return copyOfDino;
}

const notExtinct = function (dinos) {
  return dinos.filter(isNotExtinct);
}

const triassicOnly = function (dinos) {
  return dinos.filter(isTriassic);
}

//helper functon for notTriassic
const isNotTriassic = function (dino) {
  const copyOfDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct);

  if (copyOfDino.period === 'Triassic') {
    return false;
  } else {
    return true;
  }
}
const notTriassic = function (dinos) {
  return dinos.filter(isNotTriassic);
}

const bySpecies = function (dinos) {
  const copyOfDinos = [...dinos];
  return copyOfDinos.sort(isFirstAlphabeticallyBySpecies);
}

const byExtinctLast = function (dinos) {
  const copyofDinos = [...dinos];
  return copyofDinos.sort(extinctIsLast);
}

const byCarnivoresFirst = function (dinos) {
  const copyOfDinos = [...dinos];
  return copyOfDinos.sort(carnivoreIsFirst);
}

const byPeriod = function (dinos) {
  const copyOfDinos = [...dinos];
  return copyOfDinos.sort(isInPeriodOrder);
}
/*********************************
 * TEST SETUP CODE - DON'T TOUCH!*
 ********************************/

  if (typeof makeDino === 'undefined') {
    makeDino = undefined
  }

  if (typeof makeSingular === 'undefined') {
    makeSingular = undefined
  }

  if (typeof truncateSpecies === 'undefined') {
    truncateSpecies = undefined
  }

  if (typeof makeExtinct === 'undefined') {
    makeExtinct = undefined
  }

  if (typeof isCarnivore === 'undefined') {
    isCarnivore = undefined
  }

  if (typeof isExtinct === 'undefined') {
    isExtinct = undefined
  }

  if (typeof isTriassic === 'undefined') {
    isTriassic = undefined
  }

  if (typeof isJurassic === 'undefined') {
    isJurassic = undefined
  }

  if (typeof isCretaceous === 'undefined') {
    isCretaceous = undefined
  }

  if (typeof isFirstAlphabeticallyBySpecies === 'undefined') {
    isFirstAlphabeticallyBySpecies = undefined
  }

  if (typeof extinctIsLast === 'undefined') {
    extinctIsLast = undefined
  }

  if (typeof carnivoreIsFirst === 'undefined') {
    carnivoreIsFirst = undefined
  }

  if (typeof isInPeriodOrder === 'undefined') {
    isInPeriodOrder = undefined
  }

  if (typeof singularizeDinos === 'undefined') {
    singularizeDinos = undefined
  }

  if (typeof truncateDinos === 'undefined') {
    truncateDinos = undefined
  }

  if (typeof makeAllExtinct === 'undefined') {
    makeAllExtinct = undefined
  }

  if (typeof carnivoresOnly === 'undefined') {
    carnivoresOnly = undefined
  }

  if (typeof herbivoresOnly === 'undefined') {
    herbivoresOnly = undefined
  }

  if (typeof extinctOnly === 'undefined') {
    extinctOnly = undefined
  }

  if (typeof notExtinct === 'undefined') {
    notExtinct = undefined
  }

  if (typeof triassicOnly === 'undefined') {
    triassicOnly = undefined
  }

  if (typeof notTriassic === 'undefined') {
    notTriassic = undefined
  }

  if (typeof bySpecies === 'undefined') {
    bySpecies = undefined
  }

  if (typeof byExtinctLast === 'undefined') {
    byExtinctLast = undefined
  }

  if (typeof byCarnivoresFirst === 'undefined') {
    byCarnivoresFirst = undefined
  }

  if (typeof byPeriod === 'undefined') {
    byPeriod = undefined
  }



module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct,
  isCarnivore,
  isExtinct,
  isTriassic,
  isJurassic,
  isCretaceous,
  isFirstAlphabeticallyBySpecies,
  extinctIsLast,
  carnivoreIsFirst,
  isInPeriodOrder,
  singularizeDinos,
  truncateDinos,
  makeAllExtinct,
  carnivoresOnly,
  herbivoresOnly,
  extinctOnly,
  notExtinct,
  triassicOnly,
  notTriassic,
  bySpecies,
  byExtinctLast,
  byCarnivoresFirst,
  byPeriod,
}
