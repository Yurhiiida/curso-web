const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums) {
    if(x == 7) {
        break
    }
    console.log(`${x} = ${nums[x]}`)    
}
console.log('Fim')
for (let y in nums) {
    if (y == 5) {
        console.log(y)
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}
console.log('Fim')