interface Presentar {
    mostrarnombre(): string;
    mostraredad(): number;
    mostrarlegajo(): number;
    mostrarsueldo(): number;
    mostrarcompra(): number;
    mostrarproducto(): string;
}

class Persona {
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

    mostrarnombre(): string {
        return this.nombre;
    }

    mostraredad(): number {
        return this.edad;
    }

    mostrarlegajo(): number {
        return this.legajo;
    }
}

class Empleado extends Persona {
    private sueldo: number;

    constructor(nombre: string, edad: number, legajo: number, sueldo: number) {
        super(nombre, edad, legajo);
        this.sueldo = sueldo;
    }

    public getSueldo(): number {
        return this.sueldo;
    }

    mostrarsueldo(): number {
        return this.sueldo;
    }
}

class Cliente extends Persona implements Presentar {
    private Compra: number;

    constructor(nombre: string, edad: number, legajo: number, Compra: number) {
        super(nombre, edad, legajo);
        this.Compra = Compra;
    }

    public getCompra(): number {
        return this.Compra;
    }

    mostrarcompra(): number {
        return this.Compra;
    }

    mostrarnombre(): string {
        return this.getNombre();
    }

    mostraredad(): number {
        return this.getEdad();
    }

    mostrarlegajo(): number {
        return this.getLegajo();
    }

    mostrarsueldo(): number {
        return 0;
    }

    mostrarproducto(): string {
        return "";
    }
}

class Proveedor extends Persona {
    private Producto: string;

    constructor(nombre: string, edad: number, legajo: number, Producto: string) {
        super(nombre, edad, legajo);
        this.Producto = Producto;
    }

    public getProducto(): string {
        return this.Producto;
    }

    mostrarproducto(): string {
        return this.getProducto();
    }

    mostrarnombre(): string {
        return this.getNombre();
    }

    mostraredad(): number {
        return this.getEdad();
    }

    mostrarlegajo(): number {
        return this.getLegajo();
    }

    mostrarsueldo(): number {
        return 0;
    }

    mostrarcompra(): number {
        return 0;
    }
}