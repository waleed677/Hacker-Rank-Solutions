

let arr = [
    [1,2,3],
    [4,5,6],
    [9,8,9]
];

const diagonalDifference = (arr) => {
    
    let leftToRight = 0;
    let rightToLeft = 0;


    for (let i = 0 ; i < arr.length; i++) {
        leftToRight += arr[i][i];
        rightToLeft += arr[i][arr.length- i-1]
    }

    let difference = Math.abs(leftToRight - rightToLeft);
    return difference;

}


console.log(diagonalDifference(arr));