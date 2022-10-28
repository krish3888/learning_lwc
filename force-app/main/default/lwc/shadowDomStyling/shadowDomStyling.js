import { LightningElement } from 'lwc';

export default class ShadowDomStyling extends LightningElement {
    isLoaded = false
    renderedCallback(){
        if(this.isLoaded) return 
            const styleElement = document.createElement('style')
            styleElement.innerText = `c-shadow-dom-styling .slds-button {
                background: Red;
                color: white;
            }` 
            this.template.querySelector('lightning-button').appendChild(styleElement)
            this.isLoaded = true        
    }

}