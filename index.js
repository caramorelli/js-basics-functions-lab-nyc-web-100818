// Code your solution in this file!
// describe('index.js', function() {
//   describe('distanceFromHqInBlocks()', function() {
//     it('returns a distance in blocks', function() {
//       expect(distanceFromHqInBlocks(43)).to.equal(1);
//     });

function distanceFromHqInBlocks() {
  
}

//     it('returns a distance in blocks', function() {
//       expect(distanceFromHqInBlocks(50)).to.equal(8);
//     });

//     it('calculates distances below 42nd street', function() {
//       expect(distanceFromHqInBlocks(34)).to.equal(8);
//     });
//   });

function distanceFromHqInFeet() {
  
}

//   describe('distanceFromHqInFeet()', function() {
//     it('returns a distance in feet', function() {
//       expect(distanceFromHqInFeet(43)).to.equal(264);
//     });

//     it('returns a distance in feet', function() {
//       expect(distanceFromHqInFeet(50)).to.equal(2112);
//     });

//     it('calculates distances below 42nd street', function() {
//       expect(distanceFromHqInFeet(34)).to.equal(2112);
//     });
//   });

function distanceTravelledInFeet(num1, num2) {
  return (Math.max(num1, num2) - Math.min(num1, num2)) * 264
}

function calculatesFarePrice(start, destination) {
  const num = (Math.max(num1, num2) - Math.min(num1, num2)) * 264
  if (num <= 400) {
    return 0;
  }
  else if (num > 2500) {
    return 'cannot travel that far';
  } else if (num > 2000 && num < 2500) {
    return 25;
  } else {
    let remove_free = (num - 400);
    return Math.floor(remove_free * 0.2);
  }
}


//   describe('calculatesFarePrice(start, destination)', function() {
//     it('gives customers a free sample', function() {
//       expect(calculatesFarePrice(43, 44)).to.equal(0);
//     });

//     it('charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)', function() {
//       // total feet travelled is 528, minus the first 400 feet, comes to 128 -> 2.56
//       expect(calculatesFarePrice(34, 32)).to.equal(2.56);
//     });

//     it('charges 25 dollars for a distance over 2000 feet', function() {
//       expect(calculatesFarePrice(50, 58)).to.equal(25);
//     });

//     it('does not allow rides over 2500 feet', function() {
//       expect(calculatesFarePrice(34, 24)).to.equal('cannot travel that far');
//     });
//   });