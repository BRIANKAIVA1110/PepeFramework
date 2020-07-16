import Util from '../utils/Utils.js';

class PepeTextField extends HTMLDivElement {
    #genId = new Util();
    constructor({label,placeholder,width}){
        super();
        this.id = this.#genId.getRandomId();
        this.labeId = this.#genId.getRandomId();
        this.inputId = this.#genId.getRandomId();
        this.label= label || '';
        this.placeholder = placeholder || '';
        this.width= width;
        this.className="pepe-texfield";


    }

    connectedCallback(){
        this.init();
    }
    init(){
        this.setupComponent();
        this.setupItenChild();
        this.setupStyle();
    }
    setupItenChild(){
        // this.itemsChilds.forEach(element => {
        //     this.appendChild(element);
        // });
    }
    setupComponent(){
        let textComponentHTML="";
        if(this.label!='')
            textComponentHTML+= `<label for=${this.inputId}>${this.label}</label>`;
        /*build input */
        textComponentHTML+= `<input type="text" id=${this.inputId} name=${this.inputId}`;
        textComponentHTML+= ` ${this.width!=null?`style='width: ${this.width}px'`:''}`;
        textComponentHTML+= ` ${this.placeholder!=''?` placeholder='${this.placeholder}' `:''}`;
        textComponentHTML+= ` />`;
        /*end build input */
        this.innerHTML = textComponentHTML;
    }
    setupStyle(){
        let styleResult='';
        // styleResult+= this.width!=null?` width: ${this.width}px;`:' ';
        // styleResult+= this.heigth!=null?` height: ${this.heigth}px;`:' ';
        // styleResult+= this.directionItem!=null?` flex-direction: ${this.directionItem};`:' ';
        //this.style.width <-- alternativa.
        //this.style.heigth <-- alternativa.
        if(styleResult!='')
            this.style = styleResult;
    }
}
customElements.define("pepe-textfield",PepeTextField,{extends:'div'});
export default PepeTextField;


