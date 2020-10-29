//Biblioteca de aserciones

class Asercion {
    
    expect(actual) {
        return {

            //Comprueba si el valor actual es igual al esperado
            toEqual(expected) {
                if (actual !== expected) {
                    throw new Error(`${actual} no es igual al valor esperado: ${expected}`);
                }
            },

            //Comprueba si el valor actual es del tipo esperado
            toBeType(expected){
                var tipo = typeof actual;
                if (tipo != expected) {
                    throw new Error(`${tipo} no es el tipo esperado: ${expected}`);
                }
            },

            //Comprueba si el valor actual incluye el valor esperado
            toInclude(expected){
                if (actual.includes(expected) !== true){
                    throw new Error(`[${actual}] \nno incluye el siguiente valor: ${expected}`);
                }
            },

            //Comprueba si el valor actual es menor que el esperado
            toBeLowerThan(expected) {
                if (actual < expected) {
                    throw new Error(`${actual} es menor que el valor esperado: ${expected}`);
                }
            },

            //Comprueba si el valor actual es menor que el esperado
            toBeGreaterThan(expected) {
                if (actual > expected) {
                    throw new Error(`${actual} es mayor que el valor esperado: ${expected}`);
                }
            },
        }
    }
}

module.exports = Asercion;