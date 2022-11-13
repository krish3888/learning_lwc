import { api, LightningElement } from 'lwc';

export default class SetterDemoChild extends LightningElement {
    userRecord

    @api 
    get detail(){
        return this.userRecord
    }
    set detail(data){
        this.userRecord ={...data, Age:data.Age*2,location:'Malaysia'}
    }

}