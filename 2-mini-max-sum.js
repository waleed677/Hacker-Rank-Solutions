
let arr = [1, 2,3,4,5];

const miniMaxSum = (arr) => {

    //  sort the given array
    const sortedArray = arr.sort((a,b) => a - b );
    
    // Find the Min value starting from index 0
    const minSum = sortedArray.slice(0,-1).reduce((total, current) => total+current, 0);

    // Find the Max value starting from index 1
    const maxSum = sortedArray.slice(1).reduce((total,current) => total + current, 0);

    console.log(minSum, maxSum)
}

miniMaxSum(arr);