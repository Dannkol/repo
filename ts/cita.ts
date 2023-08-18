import { Expose } from "class-transformer";


export class Cita {

    @Expose({ name: 'cit_codigo'})
    cit_codigo : number;
    @Expose({ name: "cit_fecha"})
    cit_fecha : Date;
    @Expose({ name: "cit_estadoCita"})
    cit_estadoCita : number;
    @Expose({ name: "cit_medico"})
    cit_medico : number;
    @Expose({ name: "cit_datoUsuario"})
    cit_datoUsuario : number;


    constructor(data: Partial<Usuario>) {
        Object.assign(this, data);
        
        this.cit_codigo = 0;
        this.cit_fecha = new Date("2032-10-01");
        this.cit_estadoCita = 0;
        this.cit_medico = 0;
        this.cit_datoUsuario = 0
    }

}