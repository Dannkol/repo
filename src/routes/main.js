import express from 'express';


import { MiddlewareCreateToken } from '../middleware/CreateToken.js';
import { MiddlewareVerifyToken } from '../middleware/VarifyToken.js';

import run from '../db/conecct.js';

const routes = express.Router();

routes.get('/auth/:colleccion', MiddlewareCreateToken);

routes.all('/Usuario', MiddlewareVerifyToken, (req, res) => {
    res.status(200).json({
        message: `Usuario fue ${req.method}`
    });
})



routes.all('/Cita', MiddlewareVerifyToken, async (req, res) => {
    const method = req.method

    let client

    switch (method) {
        case 'GET':
            client = await run();

            try {


                const db = client.db("citas");

                const collection = db.collection("usuarios");

                const result = await collection.find({}).toArray();

                console.log(res);
                res.status(200).json(result);

            } catch (error) {
                console.error(error);
                res.status(500).json({
                    message: error.message
                });
            } finally {
                await client.close();
            }

            break;

        case 'POST':
            client = await run();
            const db = client.db("citas");

            try {
                
            } catch (error) {
                
            }finally{
                await client.close();
            }


        default:
            break;
    }

})


routes.all('/Genero', MiddlewareVerifyToken, (req, res) => {
    res.status(200).json({
        message: `Genero fue ${req.method}`
    });
})


routes.all('/Acudiente', MiddlewareVerifyToken, (req, res) => {
    res.status(200).json({
        message: `Acudiente fue ${req.method}`
    });
})

export default routes;