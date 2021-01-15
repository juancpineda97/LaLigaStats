class miError extends Error{
    constructor(codigo, mensaje){
        super(mensaje);
        this.codigo = codigo;
    }
}

module.exports = miError;