import { Game } from './../Game.model';
import { GameService } from './../game.service';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  games: Game[] = [];

@Output()
selectedGame: any;

  constructor(private gService: GameService) { }

  ngOnInit() {
this.gService.getAllGames().subscribe(games => {
  this.games = games;
  // this.onSort();
});
  }

  selectGame(game: any) {
    this.selectedGame = game;
  }


  // onSort() {
  //   this.games = this.games.sort(function(a, b) {
  //   if (a['GameID'] < b['GameID'] ) {
  //    return -1;
  //   } else if (b['GameID'] < a['GameID']) {
  //     return 1;
  //   } else {
  //     return 0;
  //   }
  //   });
  // }




}
