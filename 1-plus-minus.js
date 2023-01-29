let arr = [-4, 3, -9, 0, 4, 1];


const plusMinus = (arr) => {
    
    // mapping object
    const numberMapping = {
        pos: 0,
        neg:0,
        zero: 0
    }
    
    // length of given array    
    let arrLength = arr.length;
    // from array look for positive, negative and zero numbers

    for(let i = 0 ; i < arrLength ; i++) {
        if(arr[i] > 0) {
            numberMapping["pos"]++;
        } else if(arr[i] < 0 ) {
            numberMapping["neg"]++;
        } else {
            numberMapping["zero"]++;
        }
    }

    let positive = numberMapping["pos"] / arrLength;
    let negative = numberMapping["neg"] / arrLength;
    let zero =     numberMapping["zero"] / arrLength;

    console.log(positive.toFixed(6));
    console.log(negative.toFixed(6));
    console.log(zero.toFixed(6));
}

plusMinus(arr);