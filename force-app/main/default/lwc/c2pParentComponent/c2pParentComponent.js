import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {
    displayModal=false
    handleClick(event){
        this.displayModal = true
    }
    message=''
    showToast=false
    closeHandler(event){
        this.displayModal = false
        this.showToast=true
        this.message = event.detail.msg
    }
}