import PepeTextField from './component/PepeTextField.js';//si no pones .js(extension) putea.
import PepePanel from './component/PepePanel.js';
import PepeForm from './component/PepeForm.js';
import PepeButton from './component/PepeButton.js';


(()=>{

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

    let formPersonas = new PepeForm({
        itemsChilds:[panelPersonas],
        width:600,
        heigth:600,
    });
    addElment(formPersonas,'root');
})()


function addElment (element, destinationId){
    try {
        let destinationElement = document.getElementById(destinationId);
        if(destinationElement===null)
            throw 'no se encontro elemento "destinationId"';
        destinationElement.appendChild(element);
    } catch (error) {
        console.log(error);
    }
};