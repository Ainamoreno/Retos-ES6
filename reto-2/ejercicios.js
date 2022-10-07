



class password {

    constructor() {

        this.longitud = 8;
    }
    
    // metodo
    generarContraseña(longitud) {
        const resultado = Math.random().toString(36).substring(0,8);
        console.log(resultado);

        
    }
}

console.log(password(longitud));



