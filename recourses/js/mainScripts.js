function animalParts(animal) {
    //crear la selecion de partes del animal
    let checkbox = document.getElementById(animal + 'Checkbox');
    let infoBox = document.getElementById(animal + 'Info');

    if (checkbox.checked) {
        infoBox.style.display = 'block';
    } else {
        infoBox.style.display = 'none';
    }
}

function mostrarOcultarInput(checkbox) {
    let inputNumber = checkbox.nextElementSibling;

    if (checkbox.checked) {
        inputNumber.style.display = 'inline-block';
        inputNumber.placeholder = 'Kg';
        inputNumber.min=0;
        if (inputNumber.value < 0) {
            input.value = 0;
          } // O cualquier otro estilo que desees
    } else {
        inputNumber.style.display = 'none';
    }
}

/*
let inputNumber = document.querySelector("#clientNumber");

inputNumber.addEventListener("keypress", (event) => {
    let inputValue = inputNumber.value;

    let arrayValueDefault = ["0", "0","0", "0","0", "0","0", "0","0"]

    let key = event.key;

    if (/^\d$/.test(key)) {
        inputValue += key;
        inputNumber.value = inputValue;
        let charValue = (inputNumber.value).split('')

        if(charValue.length <= 9){
            for(let i = 0; i < charValue.length; i++){
                arrayValueDefault[i] = charValue[i]
            }

            inputNumber.value = ""

            for(let i = 0; i< arrayValueDefault.length; i++){
                inputNumber.value += arrayValueDefault[i]
            }

        }

        console.log(arrayValueDefault)

        event.preventDefault();
    }
});
*/

document.getElementById('cerdoCheckbox').addEventListener('click', function () {
    animalParts('cerdo');
});
document.getElementById('carneroCheckbox').addEventListener('click', function () {
    animalParts('carnero');
});
document.getElementById('resCheckbox').addEventListener('click', function () {
    animalParts('res');
});
