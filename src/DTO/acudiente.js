var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Expose } from "class-transformer";
export class Acudiente {
    constructor(data) {
        Object.assign(this, data);
        this.acu_codigo = 0;
        this.acu_nombreCompleto = "";
        this.acu_telefono = "";
        this.acu_direccion = "";
    }
}
__decorate([
    Expose({ name: 'acu_codigo' })
], Acudiente.prototype, "acu_codigo", void 0);
__decorate([
    Expose({ name: "acu_nombreCompleto" })
], Acudiente.prototype, "acu_nombreCompleto", void 0);
__decorate([
    Expose({ name: "acu_telefono" })
], Acudiente.prototype, "acu_telefono", void 0);
__decorate([
    Expose({ name: "acu_direccion" })
], Acudiente.prototype, "acu_direccion", void 0);
