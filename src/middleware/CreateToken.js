import "reflect-metadata";

import jwt from "jsonwebtoken";

import { plainToClass, classToPlain } from "class-transformer";
import { Usuario } from "../DTO/usuario.js";
import { Cita } from "../DTO/cita.js";
import { Genero } from "../DTO/genero.js";
import { Acudiente } from "../DTO/acudiente.js";

const secretKey = "dsfsdgwreg43q56436342153edds";

const parseClass = (className, obj = {}) => {
    const inst = plainToClass(className, obj, { ignoreDecorators: true });
    return {
        inst: inst,
        obj: classToPlain(inst),
    };
};

const MiddlewareCreateToken = (req, res) => {
    const colleccion = req.params.colleccion;
    try {
        let schema;
        switch (colleccion) {
            case "Usuario":
                schema = parseClass(Usuario).inst;
                break;
            case "Cita":
                schema = parseClass(Cita).inst;
                break;
            case "Genero":
                schema = parseClass(Genero).inst;
                break;
            case "Acudiente":
                schema = parseClass(Acudiente).inst;
                break;
            default:
                throw new Error("Colección no reconocida");
        }
        const token = jwt.sign({ schema }, secretKey, {
            expiresIn: "1h",
        });
        res.status(200).json({
            token: token,
        });
    } catch (error) {
        res.status(401).json({
            error: error.message,
        });
        console.error(error);
    }
};

export { MiddlewareCreateToken };