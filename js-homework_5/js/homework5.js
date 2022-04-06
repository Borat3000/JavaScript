'use strict';


function range(one, two, three){
    let rangeMass = [];
    three = three || 1;
    if (three > 0) {
        while (one <= two) {
            rangeMass.push(one);
            one += three;    
        }
    } else {
        while (one <= two) {
            rangeMass.push(two);
            one += three;
        }
    }
        rangeMass.push(two);
        return rangeMass;
    }
console.log(range(1, 33, 3));
    

