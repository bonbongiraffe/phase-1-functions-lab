// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    return Math.abs(someValue-42);
  }

function distanceFromHqInFeet(someValue) {
    return 264*distanceFromHqInBlocks(someValue);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }

// negative return value means destination was SOUTH relative to start
// positive return value means destination was NORTH relative to start
function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    return Math.abs(264*(destination-start));
  }

//   - `calculatesFarePrice`: Given the same starting and ending block as the
//   previous test (_hint hint_), return the fare for the customer. The first four
//   hundred feet are free. For a distance between 400 and 2000 feet, the price is
//   2 cents per foot (not including 400, which are free!). Then Scuber charges a
//   flat fare of $25 for a distance over 2000 feet and under 2500 feet.
//   Finally, Scuber does not allow any rides over 2500 feet — the function returns
//   `'cannot travel that far'` if a ride over 2500 feet is requested.

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start,destination);

    if (distance < 400){
        return 0;
    }

    else if (distance < 2000){
        return 0.02*(distance-400);
    }

    else if (distance < 2500){
        return 25;
    }

    else {
        return "cannot travel that far";
    }
    //returns the fare for the customer
  }