import PepeTextField from '../component/PepeTextField.js';//si no pones .js(extension) putea.
import PepePanel from '../component/PepePanel.js';
import PepeForm from '../component/PepeForm.js';
import PepeButton from '../component/PepeButton.js';


class PanelColores extends PepeForm{

    constructor(){
        super();
    }
    connectedCallback(){
        this.init();
    }
    init(){
        let textFieldNombre = new PepeTextField({
            label:'Ingrese Nombre',
            placeholder:'Ingrese nombre'
        });
        let textFieldApellido = new PepeTextField({
            // label:'Ingrese apellido',
            placeholder:'Ingrese apellido'
        });
        let textFieldDNI = new PepeTextField({
            label:'Ingrese DNI',
            width:250,
        });
    
        let buttonEnviar = new PepeButton({
            value:'enviar',
    
            onClick:()=>{
                alert('jojojojoj');
            }
        });
    
        let panelPersonas = new PepePanel({
            // DirectionItem:'row',
            itemsChilds:[textFieldNombre,textFieldApellido,textFieldDNI,buttonEnviar],
            directionItem:'column',
            heigth:500
        });

        this.itemsChilds[panelPersonas];
    }
}

customElements.define('panel-colores',PanelColores);

export default PanelColores;