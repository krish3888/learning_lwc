import { LightningElement,api} from 'lwc';

export default class P2cAlertComponent extends LightningElement {
    @api cMessage
    @api cardHeading
    @api number
    @api isValid
}