let arr = [1, 5, 10, 3]

let newArray = arr.map(element => element * 100)

console.log(newArray)

let arrCents = []

for (let i = 0; i < arr.length; ++i) {
    arrCents.push(arr[i] * 100)
}

console.log(arrCents)