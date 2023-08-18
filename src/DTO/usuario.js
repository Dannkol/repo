var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Expose } from "class-transformer";
export class Usuario {
    constructor(data) {
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
__decorate([
    Expose({ name: 'usu_id' })
], Usuario.prototype, "usu_id", void 0);
__decorate([
    Expose({ name: "usu_nombre" })
], Usuario.prototype, "usu_nombre", void 0);
__decorate([
    Expose({ name: "usu_segdo_nombre" })
], Usuario.prototype, "usu_segdo_nombre", void 0);
__decorate([
    Expose({ name: "usu_primer_apellido_usuar" })
], Usuario.prototype, "usu_primer_apellido_usuar", void 0);
__decorate([
    Expose({ name: "usu_segundo_apellido_usar" })
], Usuario.prototype, "usu_segundo_apellido_usar", void 0);
__decorate([
    Expose({ name: "usu_telefono" })
], Usuario.prototype, "usu_telefono", void 0);
__decorate([
    Expose({ name: "usu_direccion" })
], Usuario.prototype, "usu_direccion", void 0);
__decorate([
    Expose({ name: "usu_email" })
], Usuario.prototype, "usu_email", void 0);
__decorate([
    Expose({ name: "usu_tipodoc" })
], Usuario.prototype, "usu_tipodoc", void 0);
__decorate([
    Expose({ name: "usu_genero" })
], Usuario.prototype, "usu_genero", void 0);
__decorate([
    Expose({ name: "usu_acudiente" })
], Usuario.prototype, "usu_acudiente", void 0);
