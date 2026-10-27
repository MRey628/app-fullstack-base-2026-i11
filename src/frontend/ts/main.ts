
function SayHello(){
    let current_value = document.getElementById("textarea_1") as HTMLInputElement;
    let new_value = "Hello world!!!" + "\n" + current_value.value;
    document.getElementById("textarea_1").innerHTML = new_value;
}

function Sumar(a:number,b:number):number{
    return a + b;
}

function Restar(a:number,b:number):number{
    return a - b;
}

function Multiplicar(a:number,b:number):number{
    return a * b;
}

function Dividir(a:number,b:number):number{
    if(b == 0){
        alert("No se puede dividir entre cero");
        return 0;
    }
    return a / b;
}

function Operar(a:number,b:number,operacion:string):number{
    switch(operacion){
        case "sumar":
            return Sumar(a,b);
        case "restar":
            return Restar(a,b);
        case "multiplicar":
            return Multiplicar(a,b);
        case "dividir":
            return Dividir(a,b);
        default:
            alert("Operación no válida");
            return 0;
    }
}

let resultado:number = 0;
let a:number = 0;
let b:number = 0;
a = 5;
b = 3;
resultado = Operar(a, b, "sumar");
alert(a+"+"+b+" = "+resultado);
resultado = Operar(a, b, "restar");
alert(a+"-"+b+" = "+resultado);
resultado = Operar(a, b, "multiplicar");
alert(a+"*"+b+" = "+resultado);
resultado = Operar(a, b, "dividir");
alert(a+"/"+b+" = "+resultado);