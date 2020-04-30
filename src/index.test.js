/* global describe, it */
import { expect } from 'chai'
import harvardHouses from './index'

describe('harvard-houses', () => {
  describe('all', () => {
    it('should be an array of objects', () => {
      expect(harvardHouses.all).to.satisfy(isArrayOfObjects)

      function isArrayOfObjects (array) {
        return array.every(item => {
          return typeof item === 'object'
        })
      }
    })

    it('should contain `Kirkland`', () => {
      const kirkland = {
        Kirkland: {
          url: 'http://kirkland.harvard.edu/',
          icon: 'http://static.hwpi.harvard.edu/files/styles/os_files_small/public/osl/files/kirkland-shield.png'
        }
      }

      expect(harvardHouses.all).to.deep.include(kirkland)
    })
  })

  describe('random', () => {
    it('should return a random item from the harvardHouses.all', () => {
      const randomItem = harvardHouses.random()
      expect(harvardHouses.all).to.deep.include(randomItem)
    })

    it('should return an array of random items if passed a number', () => {
      const randomItems = harvardHouses.random(3)
      expect(randomItems).to.have.length(3)
      randomItems.forEach(item => {
        expect(harvardHouses.all).to.deep.include(item)
      })
    })
  })
})
