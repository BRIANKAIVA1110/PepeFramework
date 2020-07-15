import PepeTextField from './component/PepeTextField.js';//si no pones .js(extension) putea.
import PepePanel from './component/PepePanel.js';

(()=>{

    let textFieldNombre = new PepeTextField({
        Label:'Ingrese Nombre:'
    });
    let textFieldApellido = new PepeTextField({
        Label:'Ingrese apellido:'
    });

    let PepePanelMain = new PepePanel({
        // DirectionItem:'row',
        ItemChild:[textFieldNombre,textFieldApellido]
    });
    addElment(PepePanelMain,'root');
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