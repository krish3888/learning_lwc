import { LightningElement,api} from 'lwc';

export default class P2cParentComponent extends LightningElement {
    p_msg='Hurray!!! I got the data';
    @api p_cardHeading='Parent to child primitive data communication.'
}