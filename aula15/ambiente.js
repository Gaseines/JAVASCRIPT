var div = '--------------------------'


let num = [12, 15, 25]
num.push(36)
num[0] = 60


console.log(`o vetor é: ${num}`)
console.log(`o vetor tem ${num.length} elementos`)
console.log(div)

let num2 = [55, 44, 33, 5 , 6, 8, 10]


for(let c = 0; c <= num2.length - 1; c++){
    
    console.log(`A posição ${c} tem o valor ${num2[c]}`)
}
console.log(div)

let num3 = [55, 44, 33, 5 , 6, 8, 10]

for(let pos in num3){
    console.log(`A posição ${pos} tem o valor ${num3[pos]}`)
}