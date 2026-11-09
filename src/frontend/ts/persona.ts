interface Display {
    mostrarnombre(): void;
    mostraredad(): void;
    mostrarlegajo(): void;
    mostrarinformacion(): void;
}

interface DisplayEmpleado extends Display {
    mostrarsueldo(): void;
}

interface DisplayCliente extends Display {
    mostrarcompra(): void;
}

interface DisplayProveedor extends Display {
    mostrarproducto(): void;
}

class Persona implements Display{
    private nombre: string;
    private edad: number;
    private legajo: number;

    constructor(nombre: string, edad: number, legajo: number) {
        this.nombre = nombre;
        this.edad = edad;
        this.legajo = legajo;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getEdad(): number {
        return this.edad;
    }

    public getLegajo(): number {
        return this.legajo;
    }

    mostrarnombre(): void {
        alert(this.getNombre());
    }

    mostraredad(): void {
        alert(this.getEdad() + " años");
    }

    mostrarlegajo(): void {
        alert(this.getLegajo());
    }
}

class Empleado extends Persona implements DisplayEmpleado {
    private sueldo: number;

    constructor(nombre: string, edad: number, legajo: number, sueldo: number) {
        super(nombre, edad, legajo);
        this.sueldo = sueldo;
        alert("Nombre: " + this.getNombre() + "\nEdad: " + this.getEdad() + " años" + "\nLegajo: " + this.getLegajo() + "\nSueldo: " + this.getSueldo() + "$");
    }

    public getSueldo(): number {
        return this.sueldo;
    }

    mostrarsueldo(): void {
        alert(this.getSueldo() + "$");
    }

    mostrarinformacion(): void {
        alert("Nombre: " + this.getNombre() + "\nEdad: " + this.getEdad() + " años" + "\nLegajo: " + this.getLegajo() + "\nSueldo: " + this.getSueldo() + "$");
    }
}

class Cliente extends Persona implements DisplayCliente {
    private Compra: number;

    constructor(nombre: string, edad: number, legajo: number, Compra: number) {
        super(nombre, edad, legajo);
        this.Compra = Compra;
        alert("Nombre: " + this.getNombre() + "\nEdad: " + this.getEdad() + " años" + "\nLegajo: " + this.getLegajo() + "\nCompra: " + this.getCompra() + "$");
    }

    public getCompra(): number {
        return this.Compra;
    }

    mostrarcompra(): void {
        alert(this.getCompra() + "$");
    }

    mostrarinformacion(): void {
        alert("Nombre: " + this.getNombre() + "\nEdad: " + this.getEdad() + " años" + "\nLegajo: " + this.getLegajo() + "\nCompra: " + this.getCompra() + "$");
    }
}

class Proveedor extends Persona implements DisplayProveedor {
    private Producto: string;

    constructor(nombre: string, edad: number, legajo: number, Producto: string) {
        super(nombre, edad, legajo);
        this.Producto = Producto;
        alert("Nombre: " + this.getNombre() + "\nEdad: " + this.getEdad() + " años" + "\nLegajo: " + this.getLegajo() + "\nProducto: " + this.getProducto());
    }

    public getProducto(): string {
        return this.Producto;
    }

    mostrarproducto(): void {
        alert(this.getProducto());
    }

    mostrarinformacion(): void {
        alert("Nombre: " + this.getNombre() + "\nEdad: " + this.getEdad() + " años" + "\nLegajo: " + this.getLegajo() + "\nProducto: " + this.getProducto());
    }
}