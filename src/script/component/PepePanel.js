import Util from '../utils/Utils.js';

class PepePanel extends HTMLDivElement{
    #genId = new Util();
    constructor({width,heigth, itemsChilds,directionItem}){
        super();
        this.id = this.#genId.getRandomId();
        this.width= width;
        this.heigth = heigth;
        this.itemsChilds=itemsChilds || [];
        this.directionItem =directionItem;
        this.className = "pepe-panel";
    }
    connectedCallback(){
        this.init();
    }
    init(){
        this.setupItenChild();
        this.setupStyle();
    }
    setupItenChild(){
        this.itemsChilds.forEach(element => {
            this.appendChild(element);
        });
    }
    setupComponent(){

    }
    setupStyle(){
        let styleResult='';
        styleResult+= this.width!=null?` width: ${this.width}px;`:' ';
        styleResult+= this.heigth!=null?` height: ${this.heigth}px;`:' ';
        styleResult+= this.directionItem!=null?` flex-direction: ${this.directionItem};`:' ';
        //this.style.width <-- alternativa.
        //this.style.heigth <-- alternativa.
        this.style = styleResult;
    }
}
customElements.define("pepe-panel",PepePanel,{extends:'div'})

export default PepePanel;