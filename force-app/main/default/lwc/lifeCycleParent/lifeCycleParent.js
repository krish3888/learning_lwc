import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {

    connectedCallback(){
        console.log('parent connectedCallback is called')
    }

    constructor(){
    super()
    console.log('parent constructor is called')
    }

    renderedCallback(){
        console.log('parent renderedCallback() is called')
    }

    name;
    parentChangeHandler(event){
        this.name = event.target.value;
    }
    
}