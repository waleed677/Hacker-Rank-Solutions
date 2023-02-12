

const minimumBribes = (q) => {

    let quelen = q.length;
    let bribes = 0;

    for (let i = 0; i < quelen ; i++) {

        if ( q[i] - (i+1) > 2) {
            console.log("Too Chaotic");
            return;
        }
        for (let j = q[i] - 2 ; j < i; j++) {
            if (q[j] > q[i]) {
                bribes++;
            }
        }
        
    }

    console.log(bribes);
    return;
} 

let q = [2, 1, 5, 3, 4];
minimumBribes(q);