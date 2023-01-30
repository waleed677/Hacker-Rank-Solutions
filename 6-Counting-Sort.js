

let arr = [1, 1, 3, 2, 1];



const countingSort = arr => {

    let result = [];
    for (let i = 0; i < 100; i++) {
        result[i] = 0;
    }



    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(arr[i])) {
            result[arr[i]] = result[arr[i]] + 1;
        } else {
            result[arr[i]] = 1;
        }
    }

    return result;
}

countingSort(arr);