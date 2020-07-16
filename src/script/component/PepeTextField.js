import Util from '../utils/Utils.js';

class PepeTextField extends HTMLDivElement {
    #genId = new Util();
    constructor(props){
        super();
        this.id = this.#genId.getRandomId();
        this.labeId = this.#genId.getRandomId();
        this.inputId = this.#genId.getRandomId();
        this.Label= props.Label;
        this.type= 'text';
        
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

        textComponentHTML+=`<label for=${this.inputId}>${this.Label}</label>`;
        textComponentHTML+=`<input type="text" id=${this.inputId} name=${this.inputId} />`;

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


