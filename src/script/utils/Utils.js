class Util {
    constructor(){
        this.getRandomId = this.getRandomId;
    }

    getRandomId(){
        let prefijoId = "pepe-component-";
        /**
         * genera numero entero random de max 5 digitos
         */
        let id = parseInt(Math.random()*100000);
        return prefijoId+=id;
    }
}

export default Util;