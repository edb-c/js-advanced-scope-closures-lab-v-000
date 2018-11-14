//closures
//produceDrivingRange
//returns a function 
//takes an argument of blockRange which is then used to calculate if something is within range 
//returns when something is out of range 

//produceTipCalculator
//returns a function 
//configures the percentage tip returned 

//createDriver
//returns a class that allows us to create a driver with a name attribute 
//increments the driverId each time a driver is created

function produceDrivingRange(blockRange){
  return function(startingBlock, endingBlock){

    let start = parseInt(startingBlock);
    let end = parseInt(endingBlock);
    let distanceToTravel = Math.abs(end - start);
    let difference = blockRange - distanceToTravel;

    if( difference > 0){
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator(percentage){
  return function(rideFare){
    return rideFare*percentage;
  }
}

function createDriver(){
  let driverId = 0
  return class {
    constructor(name){
      this.id = ++driverId
      this.name = name
    }
  }
}