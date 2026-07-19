console.log("This is module");

function average(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum / arr.length;
}

// module.exports = {
//     ave : average,
//     name : "yumna",
//     repo : " github.com/yumna"
// }
module.exports.name = "yumna";