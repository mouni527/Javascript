
function sortDescending(arr) {
    
   //const mappedArray = arr.map(num => num); 

    
    const filteredArray = arr.filter(num => num !== null); 

    const sortedArray = filteredArray.sort((a, b) => b - a);

    return sortedArray;
}


const array = [12, 9,1,2,5, 7, 1, 19, 3];
const sortedArray = sortDescending(array);
console.log("Sorted array in descending order:", sortedArray);

