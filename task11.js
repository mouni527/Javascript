// Function to remove duplicate elements from an array
function removeDuplicates(arr) {
    // Step 1: Create a new array with unique elements using filter
    const uniqueArray = arr.filter((value, index, self) => {
        // Step 2: Check if the current value's first index matches the current index
        return self.indexOf(value) === index;
    });

    return uniqueArray;
}

// Example usage
const array = [12, 5, 7, 1, 19, 3, 5, 12, 19, 3];
const uniqueElements = removeDuplicates(array);