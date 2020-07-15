class PepePanel extends HTMLDivElement{
    constructor({ItemChild,DirectionItem}){
        super();
        this.ItemChild=ItemChild;
        this.DirectionItem =DirectionItem || 'column';
        this.style = `background:grey;display: flex; flex-direction: ${this.DirectionItem};`;
        this.init();
    }
    init(){
        this.renderItenChild();
    }
    renderItenChild(){
        this.ItemChild.forEach(element => {
            this.appendChild(element);
        });
    }
    
}
customElements.define("pepe-panel",PepePanel,{extends:'div'})

export default PepePanel;