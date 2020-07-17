

class PepeButton extends HTMLInputElement{


    constructor({width,heigth,value,onClick}){
        super();
        this.onPepe=()=>{};
        this.width=width;
        this.heigth=heigth;
        this.className="pepe-button";
        this.type="button";
        this.value = value;
        this.onclick=onClick;
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
       
    }
    setupComponent(){
        let textComponentHTML='';

        /*end build input */
        if(textComponentHTML!='')
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

customElements.define('pepe-button',PepeButton,{extends:'input'});

export default PepeButton;