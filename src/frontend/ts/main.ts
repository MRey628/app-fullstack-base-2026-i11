
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
        if (event.type === "click" && event.target === document.getElementById("boton_agregar")) {
            /*empleado.mostrarinformacion();
            cliente.mostrarinformacion();
            proveedor.mostrarinformacion();*/
        }
    }
}

class ListenerClickEnviar implements EventListenerObject {
    
    private nombre : string = "";
    private email: string = "";
    private password: string = "";
    private texto_rx: string = "";
    private devices: Device[] = [];

    
    handleEvent(event: Event): void {
        if (event.type === "click" && event.target === document.getElementById("boton_enviar")) {
            this.buscarDevices(event);
            console.log("Evento capturado correctamente");
        }
    }
    private buscarDevices(event: Event): void {
        let consulta: XMLHttpRequest = new XMLHttpRequest();
        consulta.onreadystatechange = () => {
            if (consulta.readyState == 4) {
                if (consulta.status == 200) {
                    let dispInput = document.getElementById("disp") as HTMLInputElement;
                    let ubicacionInput = document.getElementById("ubicacion") as HTMLInputElement;
                    let estadoInput = document.getElementById("estado") as HTMLInputElement;
                    
                    //this.texto_rx = consulta.responseText;
                    let div: HTMLElement = document.getElementById("textarea_1") as HTMLElement;
                    //div.innerHTML = this.texto_rx;

                    this.devices = JSON.parse(consulta.responseText);

                    for(let a of this.devices){
                        div.innerHTML += "ID: " + a.id + " - Nombre: " + a.name + " - Descripción: " + a.description + " - Estado: " + (a.state ? "Encendido" : "Apagado") + " - Tipo: " + a.type + "\n";
                    }

                } else {
                    alert("Error" + consulta.status);
                }
            }
        }

        consulta.open("GET", "http://localhost:8000/devices", true);
        consulta.send();
        console.log("Consulta enviada correctamente");
    }
}

class ListenerClickAgregar implements EventListenerObject {

    private devices: Device[] = [];

    private CrearTarjetaDevice(device: Device): void {
        let dev_coleccion: HTMLElement = document.getElementById("dev_collection") as HTMLElement;
        dev_coleccion.innerHTML += `<div class="card blue-grey darken-1">
                                <div class="card-content white-text">
                                <span class="Device 1">` + device.name + `</span>
                                <p>` + device.description + `</p>
                                </div>
                                <div class="card-action">
                                <a class="waves-effect waves-light btn">Encender</a>
                                <a class="waves-effect waves-light btn">Apagar</a>
                                </div>
                            </div>`;
    }

    handleEvent(event: Event): void {
        if (event.type === "click" && event.target === document.getElementById("boton_agregar")) {
            this.CrearTarjetaDevice({ id: 1, name: "Dispositivo 1", description: "Descripción del dispositivo 1", state: true, type: 1 });
            console.log("Crear tarjeta de dispositivo capturado correctamente");
        }
    }
}


window.addEventListener("load", () => {
let boton_agregar = document.getElementById("boton_agregar");
let botonEnviar = document.getElementById("boton_enviar");
    if (boton_agregar) {
        boton_agregar.addEventListener("click", new ListenerClickAgregar());
    }
    if (botonEnviar) {
        botonEnviar.addEventListener("click", new ListenerClickEnviar());
    }
});