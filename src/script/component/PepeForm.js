import Util from '../utils/Utils.js';

class PepepForm extends HTMLDivElement{
    #genId = new Util();
    constructor({width,heigth,itemsChilds,title}){
        super();
        this.id = this.#genId.getRandomId();
        this.headerId = this.#genId.getRandomId();
        this.bodyId = this.#genId.getRandomId();
        this.title = title;
        /**
         * props custom styles
         */
        this.width = width;
        this.heigth = heigth;
        /**
         * items htmlElement childs
         */
        this.itemsChilds = itemsChilds || [];
        /**
         * styles default 
         */
        this.className = "pepe-form-main";

        /*inicializa childs | otros*/
        // this.init()
        // connectedCallback = this.setupItenChild();
        
    }
    /**
     * metodo se ejecuta cuando el elemento es renderizado.
     */
    connectedCallback(){
        this.init();
    }
    init(){
        this.setupComponent();
        this.setupStyle();
        this.setupItenChild();
    }
    setupComponent(){
        let textComponentHTML="";

        textComponentHTML+=`<div id=${this.headerId} class="pepe-form-header">`;
        textComponentHTML+=`    <div> ${this.title}`;
        textComponentHTML+=`    </div>`;
        textComponentHTML+=`    <div>`;
        textComponentHTML+=`        <a href="">-</a>`;
        textComponentHTML+=`        <a href="">[-]</a>`;
        textComponentHTML+=`        <a href="">x</a>`;
        textComponentHTML+=`    </div>`;
        textComponentHTML+=`</div>`;
        textComponentHTML+=`<div id=${this.bodyId} class="pepe-form-body">`;
        textComponentHTML+=`</div>`;
        
        this.innerHTML = textComponentHTML;
    }
    setupItenChild(){
        let formBody = document.getElementById(this.bodyId);
        this.itemsChilds.forEach(element => {
            formBody.appendChild(element);
        });
    }
    setupStyle(){
        let styleResult='';
        styleResult+= this.width!=null?` width: ${this.width}px;`:' ';
        styleResult+= this.heigth!=null?` height: ${this.heigth}px;`:' ';
        
        //this.style.width <-- alternativa.
        //this.style.heigth <-- alternativa.
        this.style = styleResult;
    }
}

customElements.define("pepe-form",PepepForm,{extends:'div'});
export default PepepForm;