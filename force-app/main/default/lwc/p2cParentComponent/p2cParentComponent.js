import { LightningElement,api} from 'lwc';

export default class P2cParentComponent extends LightningElement {
    p_msg='Hurray!!! I got the data';
    @api p_cardHeading='Parent to child primitive data communication.'
    carouselData=[
        {src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
        header:  "First Card",
        description:  "First description."},
        {src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
        header:  "Second Card",
        description:  "Second description."},
        {src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
        header:  "Third Card",
        description:  "Third description."}
    ]
    inputScore=10
    handleInput(event){
        this.inputScore = event.target.value
    }

    handleClick(){
        this.template.querySelector('c-p2c-slider-component').resetSlider()
    }
    
}