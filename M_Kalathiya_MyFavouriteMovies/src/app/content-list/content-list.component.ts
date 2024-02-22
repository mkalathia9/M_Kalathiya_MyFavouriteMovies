import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit {
  displayContentInfo(contentItem: Content) {
    console.log(`ID: ${contentItem.id} and Title: ${contentItem.title}`);
    }
  @Input () contentItems: Content[] = [];

  ngOnInit(): void {
    this.contentItems =[
      {
        id: 0,
        title: "Spider-Man: Homecoming",
        description:"Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.",
        creator:"Jon Watts",
        imgURL:"https://upload.wikimedia.org/wikipedia/en/f/f9/Spider-Man_Homecoming_poster.jpg",
        type:"Action",
        tags: ["Thriller", "fight"]
      },
      {
      id: 1,
      title: "The Dark Knight",
      description:"Batman, aided by his trusted ally Commissioner Gordon and new district attorney Harvey Dent, faces a rising criminal mastermind known as The Joker, who unleashes chaos upon Gotham City.",
      creator:"Christopher Nolan",
      imgURL:"https://tokyofox.files.wordpress.com/2012/07/the_dark_knight_rises_poster_small.jpg?w=640",
      type:"Action",
      tags: ["Thriller", "fight"]
      },
      {
        id: 2,
        title: "Avengers: Endgame",
        description:"The Avengers, torn apart after the devastating events of Avengers: Infinity War, must gather once more to undo Thanos' actions and restore order to the universe.",
        creator:"Anthony Russo",
        imgURL:"https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
        type:"Action",
        tags: ["Thriller", "fight"]
      },
      {
        id: 3,
        title: "Call of duty",
        description: "Movie which includes gun fights and battle royale",
        creator: "Usman firoz",
        imgURL: "https://cdn.akamai.steamstatic.com/steam/apps/1962663/capsule_616x353.jpg?t=1703006730",
        type: "Fight",
        tags: ["Battle", "action"]
      },
      {
        id: 4,
        title: "Inception",
        description: "A skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: the inception of an idea into the mind of a C-level executive.",
        creator: "Christopher Nolan",
        imgURL: "https://2.bp.blogspot.com/-xFYEth1IzNg/T7aRDDExXfI/AAAAAAAABxs/UUKfDL0Tgw0/s1600/inception-poster.jpg",
        type: "Sci-Fi",
        tags: ["Mind-Bending", "Thriller"]
      }
    ];
  }
}