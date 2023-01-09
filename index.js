let precio = 0;
let cuotas = 0;
let total = 0;
let precioEnCuotas = 0;
let res = "no";

do {
    precio = parseInt(prompt('Ingrese el precio'))
    total = total + precio
    res = prompt('quiere seguir comprando').toLowerCase()
} while (res === "si");
cuotas = parseInt(prompt('Ingrese las cuotas 3, 6 o 12'))
if (cuotas === 3 || cuotas === 6 || cuotas === 12) {
    precioEnCuotas = (total / cuotas).toFixed(2);
} else {
    alert(`Solo podes elegir entre 3, 6 y 12 cuotas.`)
}

console.log(parseInt(precioEnCuotas));
alert(`Debe pagar ` + precioEnCuotas + ` en ` + cuotas + ` cuotas`)





