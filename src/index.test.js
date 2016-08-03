import {expect} from 'chai';
import harvardHouses from './index';

describe('harvard-houses', function() {
  describe('all', function() {
    it('should be an array of objects', function() {
      expect(harvardHouses.all).to.satisfy(isArrayOfObjects);

      function isArrayOfObjects(array) {
        return array.every(function(item) {
          return typeof item === 'object';
        });
      }
    });

    it('should contain `Kirkland`', function() {
        var kirkland = {
            "Kirkland": {
                "url": "http://kirkland.harvard.edu/",
                "icon": "http://static.hwpi.harvard.edu/files/styles/os_files_small/public/osl/files/kirkland-shield.png"
            }
        };
      expect(harvardHouses.all).to.include(kirkland);
    });
  });

  describe('random', function() {
    it('should return a random item from the harvardHouses.all', function() {
      var randomItem = harvardHouses.random();
      expect(harvardHouses.all).to.include(randomItem);
    });

    it('should return an array of random items if passed a number', function() {
      var randomItems = harvardHouses.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach(function(item) {
        expect(harvardHouses.all).to.include(item);
      });
    });
  });
});
