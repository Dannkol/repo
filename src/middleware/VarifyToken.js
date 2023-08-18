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

const verifyClass = (req, res, next, className, schema) => {
    !(JSON.stringify(schema) === JSON.stringify(parseClass(className).inst))
        ? res.status(403).json({ error: "No tienes permisos para esta acción" })
        : next();
};

const MiddlewareVerifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res
            .status(401)
            .json({ error: "Token de autorización no proporcionado" });
    } else {
        jwt.verify(token, secretKey, (err, schema) => {
            if (err) {
                return res
                    .status(403)
                    .json({ error: "Token de autorización inválido" });
            }
            try {
                switch (req.url.split("/")[1]) {
                    case "Usuario":
                        verifyClass(req, res, next, Usuario, schema.schema);
                        break;
                    case "Cita":
                        verifyClass(req, res, next, Cita, schema.schema);
                        break;
                    case "Genero":
                        verifyClass(req, res, next, Genero, schema.schema);
                        break;
                    case "Acudiente":
                        verifyClass(req, res, next, Acudiente, schema.schema);
                        break;
                    default:
                        throw new Error("Colección no reconocida");
                }
            } catch (error) {
                res.status(401).json({
                    error: error.message,
                });
                console.log(error);
            }
        });
    }
};

export { MiddlewareVerifyToken };