var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Expose } from "class-transformer";
export class Cita {
    constructor(data) {
        Object.assign(this, data);
        this.cit_codigo = 0;
        this.cit_fecha = new Date("2032-10-01");
        this.cit_estadoCita = 0;
        this.cit_medico = 0;
        this.cit_datoUsuario = 0;
    }
}
__decorate([
    Expose({ name: 'cit_codigo' })
], Cita.prototype, "cit_codigo", void 0);
__decorate([
    Expose({ name: "cit_fecha" })
], Cita.prototype, "cit_fecha", void 0);
__decorate([
    Expose({ name: "cit_estadoCita" })
], Cita.prototype, "cit_estadoCita", void 0);
__decorate([
    Expose({ name: "cit_medico" })
], Cita.prototype, "cit_medico", void 0);
__decorate([
    Expose({ name: "cit_datoUsuario" })
], Cita.prototype, "cit_datoUsuario", void 0);
