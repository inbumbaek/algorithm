function pushFront(arr, val) {
    arr.unshift(val);
    return arr;
}

let arr = [5, 7, 2, 3];
let val = 8;
let result = pushFront(arr, val);
console.log(result);


function popFront(arr) {
    let beginningValue = arr[0]
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1]
    }
    arr.length = arr.length - 1
    console.log(arr)
    return beginningValue
}
console.log(popFront([4, 5, 7, 9]))


function insertAt(arr, idx, val) {
    for (let i = arr.length; i >= idx; i--) {
        arr[i] = arr[i - 1]
    }
    arr[idx] = val
    return arr
}
console.log(insertAt([100, 200, 5], 2, 311))

function removeAt(arr, idx) {
    let val = arr[idx]
    arr.splice(idx, 1)
    console.log(arr)
    return val
}
console.log(removeAt([1000,3,204,77], 1))