// function findMinMax() {
//     let Array = [60, 80, 20, 30, 10];

//     let minValue = Math.min(...Array);
//     let maxValue = Math.max(...Array);
    
//     console.log("Minimum element is:" + minValue);
//     console.log("Maximum Element is:" + maxValue);
// }

// findMinMax()

function calculate() {
    var input = document.getElementById('inputField').value.trim();
    var numbers = input.split(',').map(parseFloat);

    var min = Math.min(...numbers);
    var max = Math.max(...numbers);

    document.getElementById('minResult').value = min;
    document.getElementById('maxResult').value = max;
}