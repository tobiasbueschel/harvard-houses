import uniqueRandomArray from 'unique-random-array'
import harvardHouses from './harvard-houses.json'

const getRandomHouse = uniqueRandomArray(harvardHouses)

const random = number => {
  if (number === undefined) {
    return getRandomHouse()
  } else {
    const getRandomHouses = []
    for (let i = 0; i < number; i++) {
      getRandomHouses.push(getRandomHouse())
    }
    return getRandomHouses
  }
}

module.exports = {
  all: harvardHouses,
  random
}
