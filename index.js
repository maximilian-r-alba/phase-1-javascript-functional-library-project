


//Function that takes in an array or object, and a callback function as parameters, must pass the elements in the collection into the callback, and return the collection
function myEach (collection, callback){
    let array = Object.values(collection)
   
    
    for (let i = 0; i<array.length; i++){
        callback(array[i])
    }
    return collection

}
// Produces a new array of values by mapping each value in `collection` through a transformation function, `callback`. Returns the new array without modifying the original.
function myMap(collection, callback){
    
    let array = []
    let values = Object.values(collection)

    for (let i = 0; i < values.length; i++){
        array.push(callback(values[i]))
    }

    return array

}

function myReduce(collection, callback, acc){
    let values = Object.values(collection)
    let i = 0
    if (acc === undefined){
        acc = values[0]
        i++;
    }

    
    for(i; i < values.length; i++){
       acc = callback(acc, values[i], values)

    }
    

    return acc
}

function myFind(collection, predicate){
    let values = Object.values(collection)
    for (let i = 0; i< values.length; i++){
        if(predicate(values[i])){
            return values[i]
        }
    }
    return undefined
    
}

function myFilter(collection, predicate){
    let array = []
    let values = Object.values(collection)
    
    for (let i = 0; i<values.length; i++){
        if (predicate(values[i])){
            array.push(values[i])
        }
    }

    return array
}

function mySize(collection){
    return Object.keys(collection).length
}

function myFirst(array, num){
    if (num === undefined){
        return array[0]
    }

    return array.slice(0,num)
}

function myLast(array, num){
    if (num === undefined){
        return array[array.length-1]
    }

    return array.slice(-Math.abs(num))

}

function myKeys(object){
    return Object.keys(object)
}

function myValues(object){
    return Object.values(object)
}