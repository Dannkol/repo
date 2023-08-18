import { Expose } from "class-transformer";


export class Acudiente {

    @Expose({ name: 'acu_codigo'})
    acu_codigo : number;
    @Expose({ name: "acu_nombreCompleto"})
    acu_nombreCompleto : string;
    @Expose({ name: "acu_telefono"})
    acu_telefono : string;
    @Expose({ name: "acu_direccion"})
    acu_direccion : string

    constructor(data: Partial<Acudiente>) {
        Object.assign(this, data);
        
        this.acu_codigo = 0;
        this.acu_nombreCompleto = "";
        this.acu_telefono = "";
        this.acu_direccion = ""

    }

}