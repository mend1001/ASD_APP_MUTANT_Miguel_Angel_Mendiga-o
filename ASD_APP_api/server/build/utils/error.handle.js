"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleHttp = void 0;
const handleHttp = (res, error) => {
    if(res.status(500))
    {
        res.status(500).json({ text: "Please fill current field" });
        res.send({ error });
    }
    if(res.status(404))
    {
        res.status(404).json({ text: "The mutant doesn't exits" });
        res.send({ error } + "Búsquedas sin resultados. ");
    }
    if(res.status(404))
    {
        res.status(400).json({ message: "Bad Request. Please fill all field." });
        res.send({ error } + "Búsquedas sin resultados. ");
    }
    
    
};
exports.handleHttp = handleHttp;
