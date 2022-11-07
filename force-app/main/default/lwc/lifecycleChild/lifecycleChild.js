import { LightningElement } from 'lwc';

export default class LifecycleChild extends LightningElement {

    connectedCallback(){
        console.log('Child connectedCallback is called')
    }

    constructor(){
    super()
    console.log('Child constructor is called')
    }

    renderedCallback(){
        console.log('Child renderedCallback() is called')
    }

    disconnectedCallback(){
        console.log('Child component disconnected---')
        alert('Child component disconnectred')
    }

    childname;
    childChangeHandler(event){
        this.childname = event.target.value;
    }
}