use("citas");

db.createCollection("usuarios", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            additionalProperties: false,
            required: [
                "usu_id",
                "usu_nombre",
                "usu_segdo_nombre",
                "usu_primer_apellido_usuar",
                "usu_segundo_apellido_usar",
                "usu_telefono",
                "usu_direccion",
                "usu_email",
                "usu_tipodoc",
                "usu_genero",
                "usu_acudiente"
            ],
            properties: {
                usu_id: {
                    bsonType: "objectId",
                    description: "ID del usuario"
                },
                usu_nombre: {
                    bsonType: "string",
                    description: "Nombre del usuario"
                },
                usu_segdo_nombre: {
                    bsonType: "string",
                    description: "Segundo nombre del usuario"
                },
                usu_primer_apellido_usuar: {
                    bsonType: "string",
                    description: "Primer apellido del usuario"
                },
                usu_segundo_apellido_usar: {
                    bsonType: "string",
                    description: "Segundo apellido del usuario"
                },
                usu_telefono: {
                    bsonType: "string",
                    description: "Telefono del usuario"
                },
                usu_direccion: {
                    bsonType: "string",
                    description: "Direccion del usuario"
                },
                usu_email: {
                    bsonType: "string",
                    description: "Correo del usuario"
                },
                usu_tipodoc: {
                    bsonType: "number",
                    description: "Tipo de documento del usuario"
                },
                usu_genero: {
                    bsonType: "number",
                    description: "Genero del usuario"
                },
                usu_acudiente: {
                    bsonType: "number",
                    description: "Acudiente del usuario"
                }
            }
        }
    }
});
db.createCollection("tipo_documento", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            additionalProperties: false,
            required: [
                "tipodoc_id",
                "tipodoc_nombre",
                "tipodoc_abreviarua"
            ],
            properties: {
                tipodoc_id: {
                    bsonType: "objectId",
                    description: "ID del tipo de documento"
                },
                tipodoc_nombre: {
                    bsonType: "string",
                    description: "Nombre del tipo de documento"
                },
                tipodoc_abreviarua: {
                    bsonType: "string",
                    description: "Descripcion del tipo de documento"
                }
            }
        }
    }
});
db.createCollection("genero", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            additionalProperties: false,
            required: [
                "gen_id",
                "gen_nombre",
                "gen_abreviarua"
            ],
            properties: {
                gen_id: {
                    bsonType: "objectId",
                    description: "ID del genero"
                },
                gen_nombre: {
                    bsonType: "string",
                    description: "Nombre del genero"
                },
                gen_abreviarua: {
                    bsonType: "string",
                    description: "Descripcion del genero"
                }
            }
        }
    }
});
db.createCollection("acudiente", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            additionalProperties: false,
            required: [
                "acu_codigo",
                "acu_nombreCompleto",
                "acu_telefono",
                "acu_direccion"
            ],
            properties: {
                acu_codigo: {
                    bsonType: "objectId",
                    description: "ID del acudiente"
                },
                acu_nombreCompleto: {
                    bsonType: "string",
                    description: "Nombre del acudiente"
                },
                acu_telefono: {
                    bsonType: "string",
                    description: "Descripcion del acudiente"
                },
                acu_direccion: {
                    bsonType: "string",
                    description: "Descripcion del acudiente"
                }

            }
        }
    }
});
db.createCollection("cita", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            additionalProperties: false,
            required: [
                "cit_codigo",
                "cit_fecha",
                "cit_estadoCita",
                "cit_medico",
                "cit_datoUsuario"
            ],
            properties: {
                cit_codigo: {
                    bsonType: "objectId",
                    description: "ID de la cita"
                },
                cit_fecha: {
                    bsonType: "date",
                    description: "Fecha de la cita"
                },
                cit_estadoCita: {
                    bsonType: "objectId",
                    description: "Estado de la cita"
                },
                cit_medico: {
                    bsonType: "objectId",
                    description: "ID del medico"
                },
                cit_datoUsuario: {
                    bsonType: "objectId",
                    description: "ID del usuario"
                }

            }
        }
    }
});
db.createCollection("estado_cita", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            additionalProperties: false,
            required: [
                "estcita_id",
                "estcita_nombre"
            ],
            properties: {
                estcita_id: {
                    bsonType: "objectId",
                    description: "ID del estado de la cita"
                },
                estcita_nombre: {
                    bsonType: "string",
                    description: "Nombre del estado de la cita"
                }
            }
        }
    }

});
db.createCollection("medico", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            additionalProperties: false,
            required: [
                "med_nroMatriculaProsional",
                "med_nombreCompleto",
                "med_especialidad",
                "med_consultorio"
            ],
            properties: {
                med_nroMatriculaProsional: {
                    bsonType: "string",
                    description: "Numero de matricula prosional del medico"
                },
                med_nombreCompleto: {
                    bsonType: "string",
                    description: "Nombre completo del medico"
                },
                med_especialidad: {
                    bsonType: "string",
                    description: "Especialidad del medico"
                },
                med_consultorio: {
                    bsonType: "string",
                    description: "Consultorio del medico"
                }
            }
        }
    }
});
db.createCollection("especialidad", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            additionalProperties: false,
            required: [
                "esp_id",
                "esp_nombre"
                ],
            properties: {
                esp_id: {
                    bsonType: "objectId",
                    description: "ID de la especialidad"
                    },
                esp_nombre: {
                    bsonType: "string",
                    description: "Nombre de la especialidad"
                }
            }
        }
    }
});
db.createCollection("consultorio", {
    validator : {
        $jsonSchema: {
            bsonType: "object",
            additionalProperties: false,
            required: [
                "cons_codigo",
                "cons_nombre"
                ],
            properties: {
                cons_codigo: {
                    bsonType: "objectId",
                    description: "ID del consultorio"
                    },
                cons_nombre: {
                    bsonType: "string",
                    description: "Nombre del consultorio"
                }
            }
        }
    }
});

