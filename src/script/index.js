
import PepeApplication from './component/PepeApplication.js';
import PanelColores from './Panels/PanelColores.js';


(()=>{
    let application = new PepeApplication({
        
    });
    
    addElment(application,'root');
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