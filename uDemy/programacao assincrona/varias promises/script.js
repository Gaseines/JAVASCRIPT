let p1 = new Promise(function(resolve, reject){
    setTimeout(() =>{
        resolve(5)
    }, 2000)
})

let p2 = Promise.resolve(10)

let p3 = new Promise((resolve, reject) =>{
    resolve(15)
})

Promise.all([p1, p2, p3]).then((values) => console.log(values))