let stocks={
    Fruits: ["bannana","grapes","apple","strawberry"],
    Liquids:["whater","ice"],
    Holder:["cone","cup","stick"],
    Toppings:["chockolate","penuts"]
}



let is_shpo_open=true

let order = (time,work)=>{
    return new Promise((resolve, reject)=>{
        if(is_shpo_open){
            setTimeout(()=>{
                resolve(work())
            },time)
            
        }
        else{console.log("our shop is closed")}
    })
}
order(2000, ()=>console.log(`${stocks.Fruits[0]} was selected`))
.then(()=>{
    return order(0,()=>console.log("productoion started"))
})
.then(()=>{
    return order(2000,()=>console.log("the fruit whas choped"))
})
.then(()=>{
    return order(1000,()=>console.log(`${stocks.Liquids[0]} and ${stocks.Liquids[0]} was added`))
})
.then(()=>{
    return order(1000,()=> console.log("start machene"))
})
.then(()=>{
    return order(2000,()=>console.log(`ice cream placed on${stocks.Holder[0]}`))
})
.then(()=>{
    return order(3000,()=>console.log(`${stocks.Toppings[0]} was placed on ice cream`))
})
.then(()=>{
    return order(2000, ()=> console.log("ice creame was served"))
})
.catch(()=>{
    console.log("costumer left")
})
.finally(()=>{
    console.log("day ended")
})