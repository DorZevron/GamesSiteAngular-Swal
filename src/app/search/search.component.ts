import { GameService } from './../game.service';
import { Game } from './../Game.model';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  games: Game[];
  searched = false;

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    console.log(form.value);
    const params = form.value;
    this.gameService.getGamesBySearchParams(
    +params.GameID, params.Game_Name, params.Player1, params.Player2, params.Who_won)
    .subscribe(games => {
      this.games = games;
      console.log(this.games);
    });
    this.searched = true;
  }

  onClearResults(): void {
    this.games = [];
    this.searched = false;
  }
}
