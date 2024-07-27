function getNumbersWithDigitsAmount(digitsAmount, array) {
    if (array.length === 0) return [];
    if (digitsAmount <= 0) return [];

    return array.filter(function (digit) {
        return Math.abs(digit).toString().length === digitsAmount;
    });
}


function ulSurround(array) {
    let temp = array.map(function (item) {
        return "<li>" + item + "</li>"
    })
    temp.splice(0, 0, "<ul>");
    temp.splice(temp.length, 0, "</ul>");
    return temp;
}

function getMinMaxAvg(array) {
    if (array.length === 0) return {};

    let temp = {"min": array[0], "max": array[0], "avg": 0};
    let sum = array.reduce(function (acc, cur, index, array) {
        if (cur < temp.min) temp.min = cur;
        if (cur > temp.max) temp.max = cur;
        if (index === array.length - 1) {
            temp.avg = (acc + cur) / array.length;
            return;
        }
        return acc + cur;
    }, 0);
    return temp;
}

function displayLetterOccurrences(string){
    let temp = {}
    string.split('').forEach((item) => {
        if(item=== ' ') temp["space"] = (temp["space"] || 0) +1;
        else temp[item] = (temp[item] || 0) +1;
    })
    return temp;
}

console.log(getNumbersWithDigitsAmount(2, [10, 23, 4, -56, 789]));
console.log(ulSurround(["abc", "lmn", "cd"]));
console.log(getMinMaxAvg([1, 2, 3, 4, 5, 6, 7]));
console.log(displayLetterOccurrences("I’ll be back"));