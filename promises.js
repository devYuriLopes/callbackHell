let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    topping: ["chocolate", "peanuts"]
};

let is_shop_open = true;
//construção da função 
//essa função normal retorna a promise que terá a sintaxe new Promise() 
// dentro dos () haverá arrow function que possuirá como os argumentos resolve e reject, pois uma promise possui três estágios, quais sejam: resolve, reject e pending.
// dentro da arrowF havera if else que 

let order = (time, work) => {
    return new Promise((resolve, reject) => {

        if (is_shop_open) {

            setTimeout( ()=> {
                resolve(work())
            },time)
        }
        else {
            reject(console.log("our shop is closed"))
        }
    })
};

order(2000 , ()=> console.log(`${stocks.Fruits[0]} was selected `))

.then (()=> {
    return order(0000, ()=> console.log("production has started"));
})

.then(()=> {
    return order(2000, ()=> console.log("the fruit was chopped"))
})

.then(()=> {
    return order(1000, ()=> {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]}`);
    })
})

.then(()=>{
    return order(1000, ()=> console.log("start the machine"))
})

.then(() => {
    return order(2000, ()=> {
        console.log(`ice cream placed on ${stocks.holder[0]}`);
    })
})

.then(()=>{
    return order(3000, ()=>{
        console.log(`${stocks.topping[0]} was selected`);
    })
})

.then (()=> {
    return order(1000, ()=> console.log("ice cream was served"))
})

.catch(()=> {
    console.log("custumer left");
}) 


.finally(()=>{
    console.log("day ended, shop is closed");
})