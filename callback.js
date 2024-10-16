function loadData(callback) {
    console.log("Fetching data...");
    callback();
    }
    loadData(() => {
    console.log("Data fetched successfully!");
    });