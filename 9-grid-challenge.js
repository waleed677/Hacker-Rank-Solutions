
const gridChallenge = (grid) => {
   const newGrid = grid.map((item) => {
        return item.split('').sort();
   });

    for ( let i = 0 ; i < newGrid.length; i++) {
        for (let j = 1 ; j < newGrid.length; j++) {
            if(newGrid[j][i] < newGrid[j-1][i]) {
                return 'NO'
            }
        }
    }

    return ' YES';
} 

let grid = ['abc', 'ade', 'efg'];
console.log(gridChallenge(grid));