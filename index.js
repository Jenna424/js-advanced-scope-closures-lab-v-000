function produceDrivingRange (blockRange) {
  return function (startBlock, endBlock) {
    let distance = Math.abs(parseInt(endBlock) - parseInt(startBlock));
    if (distance > blockRange) {
      return `${distance - blockRange} blocks out of range`;
    } else {
      return `within range by ${blockRange - distance}`;
    }
  }
}
// blockRange argument is an integer like 8
// startBlock is a string like '10th' and endBlock is a string like '20th'
// parseInt('20th') returns 20 and parseInt('10th') returns 10
function produceTipCalculator (percentTip) {
  return function (fare) {
    return fare * percentTip;
  }
}

function createDriver () {
  let driverId = 0;
  return class {
    constructor (name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
