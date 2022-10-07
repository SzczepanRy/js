let stocks={
    Fruits: ["bannana","grapes","apple","strawberry"],
    Liquids:["whater","ice"],
    Holder:["cone","cup","stick"],
    Toppings:["chockolate","penuts"]
}



let is_shpo_open=true

function time(ms){
    return new Promise((resolve ,reject)=>{
        if(is_shpo_open){
            setTimeout(resolve,ms)
        }  
        else{
            reject(console.log("shpo closed"))
        }
    })
}
async function kitchen(){
    try{
        await time(2000)
        console.log(`${stocks.Fruits[0]} was selected`)
        await time(0000)
        console.log("start the prod")
        await time(2000)
        console.log("cut the fruit")
        await time(1000)
        console.log(`${stocks.Liquids[0]} and ${stocks.Liquids[1]} was added`)
        await time(1000)
        console.log("start mashene")
        await time(2000)
        console.log(`ice cream placed on ${stocks.Holder[0]}`)
        await time(3000)
        console.log(`${stocks.Toppings[0]} was selected`)
        await time(2000)
        console.log("serve ice cream")

    }
    catch(error){
        console.log("vostumer left")    
    }
    finally{
        console.log("day ended")
    }
}
kitchen()