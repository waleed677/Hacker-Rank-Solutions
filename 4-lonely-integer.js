let a = [1,2,3,4,3,2,1];

const lonelyInteger = (a) =>  {
    
    let uniqueNumber = {};

    for (let i = 0 ; i < a.length; i++) {
        if(a[i] in uniqueNumber) {
          uniqueNumber[a[i]] +=1;
        } else {
            uniqueNumber[a[i]] = 1;
        }
    }

    for ( const value in uniqueNumber) {
        if(uniqueNumber[value] === 1) return value;
    }

}

console.log(lonelyInteger(a));