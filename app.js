/************* Ejercicio N° 2.1 **************/
let calcular1 = () => {
    let a = document.querySelectorAll(".a")[0].value;
    let b = document.querySelectorAll(".b")[0].value;
    let resultado = document.querySelectorAll('.resultado')[0];
    return resultado.innerHTML = `El Area del triangulo es <b>${((a * b) / 2).toFixed(2)}m2</b>`
}

/************* Ejercicio N° 2.2 **************/
let calcular2 = () => {
    let a = document.querySelectorAll(".a")[1].value;
    let b = document.querySelectorAll(".b")[1].value;
    let resultado = document.querySelectorAll('.resultado')[1];
    return resultado.innerHTML = `Usted puede adquierir <b>$${(a / b).toFixed(2)}</b>`
}

/************* Ejercicio N° 2.3 **************/
let calcular3 = () => {
    let a = document.querySelectorAll(".a")[2].value;
    let b = document.querySelectorAll(".b")[2].value;
    let resultado = document.querySelectorAll('.resultado')[2];
    return resultado.innerHTML = `La edad del personal es <b>${b - a} años</b>`
}

/************* Ejercicio N° 2.4 **************/
let calcular4 = () => {
    let a = document.querySelectorAll(".a")[3].value;
    let b = document.querySelectorAll(".b")[3].value;
    let resultado = document.querySelectorAll('.resultado')[3];
    return resultado.innerHTML = `El pago total por estacionamiento es de <b>$${Math.ceil((b * a))}</b>`
}

/************* Ejercicio N° 2.5 **************/
let calcular5 = () => {
    let a = document.querySelectorAll(".a")[4].value;
    let b = document.querySelectorAll(".b")[4].value;
    let resultado = document.querySelectorAll('.resultado')[4];
    return resultado.innerHTML = `El precio total a cobrar por trabajos de pintura es <b>$${(b * a).toFixed(2)}</b>`
}

/************* Ejercicio N° 2.6 **************/
let calcular6 = () => {
    let a = document.querySelectorAll(".a")[5].value;
    let b = document.querySelectorAll(".b")[5].value;
    let resultado = document.querySelectorAll('.resultado')[5];
    return resultado.innerHTML = `La hipotenusa tiene como resultado <b>${(Math.sqrt(Math.pow(a,2) + Math.pow(b,2))).toFixed(2)}m</b>`
}

/************* Ejercicio N° 2.7 **************/
let calcular7 = () => {
    let a = document.querySelectorAll(".a")[6].value;
    let b = document.querySelectorAll(".b")[6].value;
    let resultado = document.querySelectorAll('.resultado')[6];
    return resultado.innerHTML = `Su boleto tendra un costo de <b>$${(b * a).toFixed(2)}</b>`
}

/************* Ejercicio N° 2.8 **************/
let calcular8 = () => {
    let a = document.querySelectorAll(".a")[7].value;
    let b = document.querySelectorAll(".b")[7].value;
    let resultado = document.querySelectorAll('.resultado')[7];
    return resultado.innerHTML = `El tiempo que tardara en llegar a su destino en bicicleta es <b>${Math.trunc(a/b)}hs y ${ (((a%b)*2))}min</b>`
}

/************* Ejercicio N° 2.9 **************/
let calcular9 = () => {
    let a = document.querySelectorAll(".a")[8].value;
    let b = document.querySelectorAll(".b")[8].value;
    let resultado = document.querySelectorAll('.resultado')[8];
    return resultado.innerHTML = `El costo de la llamada es <b>$${(a*b).toFixed(2)}</b>`
}

/************* Ejercicio N° 2.10 **************/
let calcular10 = () => {
    let a = document.querySelectorAll(".a")[9].value;
    let b = document.querySelectorAll(".b")[9].value;
    let resultado = document.querySelectorAll('.resultado')[9];
    return resultado.innerHTML = `Su monto a pagar es <b>$${(a*b).toFixed(2)}</b>`
}

/************* Ejercicio N° 2.11 **************/
let calcular11 = () => {
    let a = document.querySelectorAll(".a")[10].value;
    let b = document.querySelectorAll(".b")[10].value;
    let resultado = document.querySelectorAll('.resultado')[10];
    return resultado.innerHTML = `Monto total a pagar por consumo de Luz es <b>$${(a*b).toFixed(2)}</b>`
}

/************* Ejercicio N° 2.12 **************/
let calcular12 = () => {
    let a = document.querySelectorAll(".a")[11].value;
    let resultado = document.querySelectorAll('.resultado')[11];
    return resultado.innerHTML = `*El precio sin descuento es <b>$${((a*1) + (a*0.15)).toFixed(2)}</b>  |--|  *El precio con descuento es <b>$${(((a*1) + (a*0.15)) - (a*0.20)).toFixed(2)}</b>, usted ahorra <b>$${((a*0.20)).toFixed(2)}</b>`
}

/************* Ejercicio N° 2.13 **************/
let calcular13 = () => {
    let a = document.querySelectorAll(".a")[12].value;
    let resultado = document.querySelectorAll('.resultado')[12];
    return resultado.innerHTML = `El ahorro obtenido es <b>$${((a*0.15*12)).toFixed(2)}</b>`
}

/************* Ejercicio N° 2.14 **************/
let calcular14 = () => {
    let a = document.querySelectorAll(".a")[13].value;
    let b = document.querySelectorAll(".b")[11].value;
    let c = document.querySelectorAll(".c")[0].value;
    let resultado = document.querySelectorAll('.resultado')[13];
    return resultado.innerHTML = `-Gasto Hotel : <b>$${(a*b).toFixed(2)}</b>   -Gasto comida : <b>$${(a*c).toFixed(2)}</b>   -otros gastos : <b>$${(a*100).toFixed(2)}</b>   -Gasto Total : <b>$${((a*b) + (a*c) +(a*100)).toFixed(2)}</b>`
}


/************* Ejercicio N° 2.15 **************/
let calcular15 = () => {
    let a = document.querySelectorAll(".a")[14].value;
    let b = document.querySelectorAll(".b")[12].value;
    let resultado = document.querySelectorAll('.resultado')[14];
    return resultado.innerHTML = `La corriente electrica es <b>${(a/b).toFixed(2)}</b> Amp y la Potencia Electrica es <b>${((a/b)*b).toFixed(2)}</b>w`
}


/************* Ejercicio N° 2.19 **************/
let calcular16 = () => {
    let a = document.querySelectorAll(".a")[15].value;
    let b = document.querySelectorAll(".b")[13].value;
    let resultado = document.querySelectorAll('.resultado')[15];
    return resultado.innerHTML = `El area del cuadrado es <b>${(a*b).toFixed(2)}</b>m2`
}


/************* Ejercicio N° 2.20 **************/
let calcular17 = () => {
    let a = document.querySelectorAll(".a")[16].value;
    let b = document.querySelectorAll(".b")[14].value;
    let c = document.querySelectorAll(".c")[1].value;
    let resultado = document.querySelectorAll('.resultado')[16];
    return resultado.innerHTML = `Nota promedio final : <b>${((a*0.25)+(b*0.25)+(c*0.50))}</b>`
}


/************* Ejercicio N° 2.21 **************/
let calcular18 = () => {
    let a = new Date(document.querySelectorAll(".a")[17].value);
    let b = new Date();
    let tiempoPasado = new Date(b - a);
    let segs = 1000;
    let mins = segs * 60;
    let hours = mins * 60;
    let days = hours * 24;
    let months = days * 30.416666666666668;
    let years = months * 12;

    //calculo 
    var anos = Math.floor(tiempoPasado / years);

    tiempoPasado = tiempoPasado - (anos * years);
    var meses = Math.floor(tiempoPasado / months)

    tiempoPasado = tiempoPasado - (meses * months);
    var dias = Math.floor(tiempoPasado / days)

    tiempoPasado = tiempoPasado - (dias * days);
    var horas = Math.floor(tiempoPasado / hours)

    tiempoPasado = tiempoPasado - (horas * hours);
    var minutos = Math.floor(tiempoPasado / mins)

    tiempoPasado = tiempoPasado - (minutos * mins);
    var segundos = Math.floor(tiempoPasado / segs)

    let resultado = document.querySelectorAll('.resultado')[17];
    return resultado.innerHTML = `Usted ah vivido ${anos} años, ${meses} meses,  ${dias} dias, ${horas} horas, y ${minutos} minutos.`
}


/************* Ejercicio N° 2.22 **************/
let calcular19 = () => {
    let a = document.querySelectorAll(".a")[18].value;
    let b = document.querySelectorAll(".b")[15].value;
    let resultado = document.querySelectorAll('.resultado')[18];
    return resultado.innerHTML = `El costo de llamada es <b>$${ a * b }</b>`
}


/************* Ejercicio N° 2.23 **************/
let calcular20 = () => {
    let a = document.querySelectorAll(".a")[19].value;
    let b = document.querySelectorAll(".b")[16].value;
    let resultado = document.querySelectorAll('.resultado')[19];
    return resultado.innerHTML = `El costo de estancia es <b>$${ a * b }</b>`
}