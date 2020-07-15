class PepeTextField extends HTMLDivElement {
    constructor(props){
        super();
        this.Label= props.Label;
        this.type= 'text';
        this.innerHTML=`<label>${this.Label}<input type="text" id="Name" name="Name" /></label>`
        this.className="";
        this.style="display:inline-block;";
    }
}
customElements.define("pepe-textfield",PepeTextField,{extends:'div'});
export default PepeTextField;


