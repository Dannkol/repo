import { Expose } from "class-transformer";


export class Genero {

    @Expose({ name: 'gen_id'})
    gen_id : number;
    @Expose({ name: "gen_nombre"})
    gen_nombre : string;
    @Expose({ name: "gen_abreviarua"})
    gen_abreviarua : string

    constructor(data: Partial<Genero>) {
        Object.assign(this, data);
        
        this.gen_id = 0;
        this.gen_nombre = "";
        this.gen_abreviarua = ""
    }

}