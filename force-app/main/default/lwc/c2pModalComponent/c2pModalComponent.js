import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {
    closeHandler(event){
        const MY_EVENT = new CustomEvent('close')
        this.dispatchEvent(MY_EVENT)
    }
}