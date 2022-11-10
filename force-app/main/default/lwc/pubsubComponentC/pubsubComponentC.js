import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';
export default class PubsubComponentC extends LightningElement {
    msgC
    connectedCallback(){
        this.callSubscriber()
    }

    callSubscriber(){
        pubsub.subscribe('componentC',(message)=>{
            this.msgC = message+' Test'
        })
    }
}