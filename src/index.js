module.exports = function multiply(first, second) {

    var total = first.length + second.length;
    var arr = [], plus = 0;
    var aArr = first.split('').reverse();
    var bArr = second.split('').reverse();
    for (var i = 0; i < total; i++) {
        arr[i] = plus;
        for (var j = 0; j <= Math.min(i, aArr.length - 1); j++) {
            if (i - j < bArr.length) {
                arr[i] += parseInt(aArr[j]) * parseInt(bArr[i - j]);
            }
        }
        plus = Math.floor(arr[i] / 10);
        arr[i] = arr[i] % 10;
    }
    return arr.reverse().join('').replace(/^0*/,'') || '0';
    

    // your solution
}
