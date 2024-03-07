//!declarar los precios

//*cerdo
const chuleta = 22000;
const codillo = 15000;
const costilla = 23500;
const lomo = 25000;
const masa = 25500;

let kg = document.querySelector('#kgCerdo');

kg.addEventListener('input', () => {
    let kgValue = kg.value; 
    let price = chuleta * kgValue;
    
    console.log(price)
});
