//Biblioteca de aserciones

class Asercion {
    
    expect(actual) {
        return {
            toEqual(expected) {
                if (actual !== expected) {
                    throw new Error(`${actual} no es igual al valor esperado: ${expected}`);
                }
            },

            toBeType(expected){
                var tipo = typeof actual;
                if (tipo != expected) {
                    throw new Error(`${tipo} no es el tipo esperado: ${expected}`);
                }
            },

            toInclude(expected){
                if (actual.includes(expected) !== true){
                    throw new Error(`[${actual}] \nno incluye el siguiente valor: ${expected}`);
                }
            },
          
            toBeLowerThan(expected) {
                if (actual < expected) {
                    throw new Error(`${actual} es menor que el valor esperado: ${expected}`);
                }
            },

            toBeGreaterThan(expected) {
                if (actual > expected) {
                    throw new Error(`${actual} es mayor que el valor esperado: ${expected}`);
                }
            },
        }
    }
}

module.exports = Asercion;