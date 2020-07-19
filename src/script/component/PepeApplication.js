import Util from "../utils/Utils.js";


class PepeApplication extends HTMLDivElement{

    #genId = new Util();
    constructor(){
        super();
        this.sideBarId = this.#genId.getRandomId();
        this.className='pepe-application';
        this.innerHTML= this.setupComponent();
    }

    connectedCallback(){
        this.init();
    }
    init(){
        this.setupComponent();
        this.setupStyle();
        this.setupItenChild();
        this.setupEventListenerMenuButton();
    }
    setupComponent(){
        let textComponentHTML="";

        textComponentHTML+=`<div class="pepe-application-nav">`;
        textComponentHTML+=`     <nav>`;
        textComponentHTML+=`         <label for="btnMenu">MENU</label>`;
        textComponentHTML+=`         <input type="checkbox" name="" id="btnMenu" name="btnMenu">`;
        textComponentHTML+=`         <input type="text" placeholder="Buscar...">`;
        textComponentHTML+=`     </nav>`;
        textComponentHTML+=`</div>`;
        textComponentHTML+=`<div class="pepe-application-main">`;
        textComponentHTML+=`     <div id=${this.sideBarId} class="pepe-application-sidebar">`;

        textComponentHTML+=`     </div>`;
        textComponentHTML+=`     <div class="pepe-application-content">`;
    
        textComponentHTML+=`     </div>`;
        textComponentHTML+=`</div>`;

        if(textComponentHTML!=null)
            this.innerHTML = textComponentHTML;
    }
    setupItenChild(){
        // let formBody = document.getElementById(this.bodyId);
        // this.itemsChilds.forEach(element => {
        //     formBody.appendChild(element);
        // });
    }
    setupStyle(){
        // let styleResult='';
        // styleResult+= this.width!=null?` width: ${this.width}px;`:' ';
        // styleResult+= this.heigth!=null?` height: ${this.heigth}px;`:' ';
        
        // //this.style.width <-- alternativa.
        // //this.style.heigth <-- alternativa.
        // this.style = styleResult;
    }

    setupEventListenerMenuButton(){
        document.getElementById('btnMenu').addEventListener('click',()=>{
            let btnMenu = document.getElementById('btnMenu');
            let sideBar = document.getElementById(this.sideBarId);
            if(btnMenu.checked){
                console.log(btnMenu.checked);
                sideBar.style.display='block';
                if(!sideBar.className.includes('pepeAnimationMenu'))
                sideBar.className+=' pepeAnimationMenu';
            }else{
                console.log(btnMenu.checked);
                sideBar.style.display='none';
            }
            // document.getElementById('btnMenu').checked=!isChecked;
        })
    }
}

customElements.define('pepe-application',PepeApplication,{extends:'div'});


export default PepeApplication;