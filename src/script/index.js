import PepeTextField from './component/PepeTextField.js';//si no pones .js(extension) putea.
import PepePanel from './component/PepePanel.js';
import PepeForm from './component/PepeForm.js';

(()=>{

    let textFieldNombre = new PepeTextField({
        Label:'Ingrese Nombre:'
    });
    let textFieldApellido = new PepeTextField({
        Label:'Ingrese apellido:'
    });
    let textFieldDNI = new PepeTextField({
        Label:'Ingrese DNI:'
    });

    let panelPersonas = new PepePanel({
        // DirectionItem:'row',
        itemsChilds:[textFieldNombre,textFieldApellido,textFieldDNI],
        directionItem:'column'
    });
    // let panelPersonas2 = new PepePanel({
    //     // DirectionItem:'row',
    //     itemsChilds:[textFieldNombre,textFieldApellido,textFieldDNI],
    //     directionItem:'colum'
    // });
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