//Задание 2: КЛАССНОЕ РЕШЕНИЕ ТАТЬЯНЫ!!!

function copy(obj) {
    var result, value, key;
    result = Array.isArray(obj) ? [] : {};
    for (key in obj) {
        value = obj[key];
        result[key] = (typeof value === "object" && value!== null) ? copy(value) : value;
    }
    return result;
 }

 var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
};

var clonedObj = copy(initialObj);

clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);

console.log(initialObj);
console.log(clonedObj);




/////////////////////////////////////////////







var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        console.log('Hello');
    }
};

function deepClone(clone) {

    if ( typeof(clone) === 'object' ) {
        if ( clone === null ) {
            return clone;
        }

        var cloneIner = Array.isArray( clone ) ? [] : {};

        for ( key in clone ) {
            cloneIner[key] = deepClone(clone[key]);
        }

        return cloneIner;
    }else {

        return clone;
    }

}

var clonedObj = deepClone(initialObj);
clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);
console.log(initialObj);
console.log(clonedObj);

















// var initialObj = {
//     string: 'Vasya',
//     number: 30,
//     boolean: true,
//     undefined: undefined,
//     null: null,
//     array: [1, 2, 3],
//     object: {
//         string2: 'Petrov',
//         object2: {
//             array2: [{}, {}]
//         },
//         object3: {}
//     },
//     method: function() {
//         console.log('Hello');
//     }
// };

// function deepClone(clone) {
//     var cloneInner = {};

//     for ( key in clone ) {
//         console.log(typeof(clone[key]));
//         if ( typeof(clone[key]) === "function" ) {
//             cloneInner[key] = clone[key];
//             deepClone();

//         }else if ( isArray(clone[key]) ) {
//             cloneInner = [];
//             deepClone();
//         }else {
//             cloneInner[key] = clone[key];
//         }
//     }

//     return cloneInner;
// }



var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        console.log('Hello');
    }
};

function deepClone(clone) {
    var cloneInner = {};

    if (clone === 'object') {
        console.log(typeof(clone));
        if (Array.isArray(clone)) {
            cloneInner = [];
            cloneInner[key] = deepClone(cloneInner);
        }else {
            cloneInner = {};
            cloneInner = deepClone(cloneInner);
        }
    }

    for ( key in clone ) {
        cloneInner[key] = clone[key];
    }

    return cloneInner;
}

var clonedObj = deepClone(initialObj);
clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);
console.log(initialObj);
console.log(clonedObj);


function deepClone(clone) {
    var cloneInner = {};
    for ( key in clone ) {
        console.log(typeof(clone[key]));
        if ( Array.isArray(clone[key]) ) {
            cloneInner = [];
            deepClone();
        }else if ( typeof(clone[key]) === 'object' ) {
            cloneInner = {};
            deepClone();
        }else {
            cloneInner[key] = clone[key];
        }
    }

    return cloneInner;
}


// function deepClone(clone) {

//     if ( typeof(clone) === 'object' ) {
//         if ( clone === null ) {
//             return clone;
//         }

//         var cloneIner = Array.isArray( clone ) ? [] : {};

//         for ( key in clone ) {
//             cloneIner[key] = deepClone(clone[key]);
//         }

//         return cloneIner;
//     }else {

//         return clone;
//     }

// }



// var initialObj = {
//     string: 'Vasya',
//     number: 30,
//     boolean: true,
//     undefined: undefined,
//     null: null,
//     array: [1, 2, 3],
//     object: {
//         string2: 'Petrov',
//         object2: {
//             array2: [{}, {}]
//         },
//         object3: {}
//     },
//     method: function() {
//         alert('Hello');
//     }
// };

// function clone(initialObj) {

//     if (typeof initialObj === 'object') {

//         if( initialObj === null){
//             return initialObj;
//         }

//         var cloneTarget = Array.isArray(initialObj) ? [] : {};

//         for (var key in initialObj) {
//             cloneTarget[key] = clone(initialObj[key]);
//         }
//         return cloneTarget;
//     } else {
//         return initialObj;
//     }
// }

// clone(initialObj);
// var clonedObj = clone(initialObj);

// clonedObj.object.object2.array2[1].name = 'Vasya';
// clonedObj.array.push(2);

// console.log(initialObj);
// console.log(clonedObj);



//Задача №3


//Object.keys(initialObj).length



var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        console.log('Hello');
    }
};

var compareObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        console.log('Hello');
    }
};



function compareObjects(obj1, obj2) {

    var result;

    for(var i = 0; i < Object.keys(obj1).length; i++) {

        label: for(var [key1, value1] of Object.entries(obj1)) {
                    for(var [key2, value2] of Object.entries(obj2)) {
                        if ( key1 != key2 || value1 != value2) {
                            return result = false;
                        }else {
                            continue label;
                        }
                            
                    }
                }
    }


    // label: for(var i = 0; i < Object.keys(obj1).length; i++) {
    //     for(var j = 0; j < Object.keys(obj1).length; j++){
    //         if ( obj1.[key].toString() = )
    //         continue label;
    //     }
    // }

    
    // for(var i = 0; i < Object.keys(obj1).length; i++) {
        
    // }

    // for(var j = 0; j < Object.keys(obj1).length; j++){
    //     if ( obj1.[key].toString() = )
    //     continue label;
    // }


    return result = true;
}



// initialObj.object.object2.array2[1].name = 'Vasya';
// initialObj.array.push(2);

console.log(compareObjects(initialObj, compareObj));
console.log(initialObj);
console.log(compareObj);




// function compare(initialObj, compareObj) {
//     initalCount = 0;
//     compareCount = 0;

//     if 



//     for (var initalKey in initialObj) {
//         initalCount += 1;
//         for (var compareKey in compareObj) {
//             compareCount += 1;
//             if (typeof(initialObj[key]) === 'object') {
//                 if (initialObj[key] == null) {
//                     if (initialObj[key] == compareObj[key]) {
//                         continue;
//                     }else {
//                         return false;
//                     }
//                 }else if (isArray(initialObj[key]) {
//                     for (var key in ) 
//                 }
//             }
//         }
//         console.log(typeof(initialObj[key]));
//     }

// }

// compare(initialObj, compareObj);

