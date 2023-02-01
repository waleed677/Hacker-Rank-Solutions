


console.log(towerBreakers(1,4));

function towerBreakers(n,m) {

    // where n = no of towers
    // where m = height of each tower

    if(m == 1) {
        return 2
    }
    

    if(n%2 === 0) {
        return 2 ;
    } else {
        return 1;
    }
}

