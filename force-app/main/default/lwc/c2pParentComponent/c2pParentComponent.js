import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {
    displayModal=false
    handleClick(event){
        this.displayModal = true
    }
    closeHandler(event){
        this.displayModal = false
    }
}