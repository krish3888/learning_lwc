import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub'
export default class PubsubComponentB extends LightningElement {
    msg
    connectedCallback(){
        this.callSubscriber()
    }

    callSubscriber(){
        pubsub.subscribe('componentA',(message)=>{
            this.msg = message
        })
    }
}