const a = 'Muhammad Nabeel Naveed'
console.log(a)

const greet = (name)=>{

    console.log(`hello bro! , ${name}`)
}

greet("Alhan")

greet("Nabeel")

console.log(global)


const id = setInterval(()=>{
    console.log('this is the interval')
}, 3000)

console.log(id)

setTimeout(()=>{
    clearInterval(id)
}, 10000)


console.log(Date.now())