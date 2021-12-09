
import { Component, Input, OnInit } from "@angular/core"; 
import { Card } from "../app.component";

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    
})
export class CardComponent implements OnInit{

    @Input()
    card!: Card; 

    title = 'Type of translate'
    text = 'My text'
    price = 50

    imgUrl: string = 'https://translion.net/images/perevod-delovoj-i-lichnoj-perepiski.jpg'

    textColor!: string;

    ngOnInit() {
        setTimeout(() => {
            this.imgUrl = 'https://translion.net/images/srochnyj-perevod-dokumentov.jpg'
        }, 3000)
        
    }

    changeTitle() {
        this.card.title = 'Title has been changed!'
    }

    inputHandler(event: any) {
        const value = event.target.value; 
        this.title = value;
    
    }

    changeHandler() {
        console.log(this.title)

    }

}
