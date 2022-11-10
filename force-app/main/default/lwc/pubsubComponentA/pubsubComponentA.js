import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub'
export default class PubsubComponentA extends LightningElement {
    message=''
    inputHandler(event){
        this.message = event.target.value
    }
    publishHandler(event){
        pubsub.publish('componentA',this.message)
        pubsub.publish('componentC',this.message+' advance ')
    }
}