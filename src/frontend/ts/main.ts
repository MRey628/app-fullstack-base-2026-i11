
/*function SayHello(){
    let current_value = document.getElementById("textarea_1") as HTMLInputElement;
    let new_value = "Hello world!!!" + "\n" + current_value.value;
    document.getElementById("textarea_1").innerHTML = new_value;
}*/

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

function Operar(a:number,b:number,operacion:any):number{
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

/*let resultado:number = 0;
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
alert(a+"/"+b+" = "+resultado);*/

let empleado:Empleado = new Empleado("Matias", 30, 12345, 500000);
let cliente:Cliente = new Cliente("Juan", 25, 54321, 1000);
let proveedor:Proveedor = new Proveedor("Pedro", 40, 67890, "Producto A");




class ListenerClickPresentar implements EventListenerObject {
    handleEvent(event: Event): void {
        if (event.type === "click" && event.target === document.getElementById("botonpres")) {
            empleado.mostrarinformacion();
            cliente.mostrarinformacion();
            proveedor.mostrarinformacion();
        }
    }
}

class ListenerClickEnviar implements EventListenerObject {
    handleEvent(event: Event): void {
        if (event.type === "click" && event.target === document.getElementById("boton_enviar")) {
            this.RecibirFormulario(event);
            alert("Evento capturado correctamente");
        }
    }
    private RecibirFormulario(event: Event): void {
        let consulta: XMLHttpRequest = new XMLHttpRequest();
        consulta.onreadystatechange = () => {
            if (consulta.readyState == 4) {
                if (consulta.status == 200) {
                    let nombreInput = document.getElementById("nombre") as HTMLInputElement;
                    let emailInput = document.getElementById("email") as HTMLInputElement;
                    let passwordInput = document.getElementById("pasword") as HTMLInputElement;

                    let nombre = nombreInput.value;
                    let email = emailInput.value;
                    let password = passwordInput.value;

                    consulta.open("POST", "http://localhost:8000/devices", true);
                    consulta.send(JSON.stringify({ nombre: nombre, email: email, password: password }));
                    alert("Error" + consulta.status);
                } else {
                    alert("Error" + consulta.status);
                }
            }
            else {
                alert("Error" + consulta.status);
            }
        }
    }
}

window.addEventListener("load", () => {
let botonpres = document.getElementById("botonpres");
let botonEnviar = document.getElementById("boton_enviar");
    if (botonpres) {
        botonpres.addEventListener("click", new ListenerClickPresentar());
    }
    if (botonEnviar) {
        botonEnviar.addEventListener("click", new ListenerClickEnviar());
    }
});