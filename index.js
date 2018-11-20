// Code your solution in this file!
// describe('index.js', function() {
//   describe('distanceFromHqInBlocks()', function() {
//     it('returns a distance in blocks', function() {
//       expect(distanceFromHqInBlocks(43)).to.equal(1);
//     });

function distanceFromHqInBlocks(num) {
  return 42 -num
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
  const num = (Math.max(start, destination) - Math.min(start, destination)) * 264
  if (num <= 400) {
    return 0;
  }
  else if (num > 2500) {
    return 'cannot travel that far';
  } else if (num > 2000 && num < 2500) {
    return 25;
  } else {
    let remove_free = (num - 400);
    return remove_free * 0.02;
  }
}
