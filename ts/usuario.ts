import { Expose } from "class-transformer";


export class Usuario {

    @Expose({ name: 'usu_id'})
    usu_id : number;
    @Expose({ name: "usu_nombre"})
    usu_nombre : string;
    @Expose({ name: "usu_segdo_nombre"})
    usu_segdo_nombre : string;
    @Expose({ name: "usu_primer_apellido_usuar"})
    usu_primer_apellido_usuar : string;
    @Expose({ name: "usu_segundo_apellido_usar"})
    usu_segundo_apellido_usar : string;
    @Expose({ name: "usu_telefono"})
    usu_telefono : string;
    @Expose({ name: "usu_direccion"})
    usu_direccion : string;
    @Expose({ name: "usu_email"})
    usu_email : string;
    @Expose({ name: "usu_tipodoc"})
    usu_tipodoc : number;
    @Expose({ name: "usu_genero"})
    usu_genero : number;
    @Expose({ name: "usu_acudiente"})
    usu_acudiente : number;

    constructor(data: Partial<Usuario>) {
        Object.assign(this, data);
        
        this.usu_id = 0;
        this.usu_nombre = "";
        this.usu_segdo_nombre = "";
        this.usu_primer_apellido_usuar = "";
        this.usu_segundo_apellido_usar = "";
        this.usu_telefono = "";
        this.usu_direccion = "";
        this.usu_email = "";
        this.usu_tipodoc = 0;
        this.usu_genero = 0;
        this.usu_acudiente = 0;
    }

}