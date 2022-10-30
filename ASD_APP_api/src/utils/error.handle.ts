import {Response} from "express";

const handleHttp = (res:Response ,  error: string)=>{
    if(res.status(500))
    {
        res.send({ error } + "Error en el backend ");
    }
    if(res.status(404))
    {
        res.status(404).json({ text: "The mutant doesn't exits" });
        res.send({ error } + "Búsquedas sin resultados. ");
    }
    if(res.status(400))
    {
        res.status(400).json({ message: "Bad Request. Please fill all field." });
        res.send({ error } + "Búsquedas sin resultados. ");
    }
}
export {handleHttp};