// Code your solution in this file!

const returnFirstTwoDrivers = function (arr) {
    return arr.slice(0,2);
;}

const returnLastTwoDrivers = function(arr){
    return arr.slice(2);
};

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = function(multVal){
    return function (val){
        return multVal*val;
    };
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers= function (arrayOfDrivers, func){
        return func(arrayOfDrivers);
}

