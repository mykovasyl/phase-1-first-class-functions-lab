
const returnFirstTwoDrivers = function(arrayOfDrivers) {
    return arrayOfDrivers.slice(0, 2);
}

const returnLastTwoDrivers = function(arrayOfDrivers) {
    //const lastTwoDrivers = 
    return arrayOfDrivers.slice(arrayOfDrivers.length - 2, arrayOfDrivers.length);
    //return lastTwoDrivers;
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(oneInteger) {
    return function () {return oneInteger * 5;}
}

const fareDoubler = function(anotherInteger) {
    return anotherInteger * 2;
}

const fareTripler = function(thirdInteger) {
    return thirdInteger * 3;
}

function selectDifferentDrivers(arrayOfDrivers, returnTheseDrivers) {
    if (returnTheseDrivers === returnFirstTwoDrivers) {
        return arrayOfDrivers.slice(0, 2);
    } else {
        return arrayOfDrivers.slice(arrayOfDrivers.length - 2, arrayOfDrivers.length);
    }
} 