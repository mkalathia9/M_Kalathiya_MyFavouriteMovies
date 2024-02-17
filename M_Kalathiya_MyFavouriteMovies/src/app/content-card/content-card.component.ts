import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';


@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  contentList: ContentList = new ContentList();

  constructor(){
    this.contentList.addContent({
      id: 0,
      title: "Spider-Man: Homecoming",
      description:"Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.",
      creator:"Jon Watts",
      imgURL:"https://upload.wikimedia.org/wikipedia/en/f/f9/Spider-Man_Homecoming_poster.jpg",
      type:"Action"
    });
    this.contentList.addContent({
      id: 1,
      title: "The Dark Knight",
      description:"Batman, aided by his trusted ally Commissioner Gordon and new district attorney Harvey Dent, faces a rising criminal mastermind known as The Joker, who unleashes chaos upon Gotham City.",
      creator:"Christopher Nolan",
      imgURL:"https://tokyofox.files.wordpress.com/2012/07/the_dark_knight_rises_poster_small.jpg?w=640",
      type:"Action"
    });
    this.contentList.addContent({
      id: 2,
      title: "Avengers: Endgame",
      description:"The Avengers, torn apart after the devastating events of Avengers: Infinity War, must gather once more to undo Thanos' actions and restore order to the universe.",
      creator:"Anthony Russo",
      imgURL:"https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
      type:"Action"
    });
  }
}