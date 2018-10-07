import { GameService } from './../game.service';
import { Game } from './../Game.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game-edit',
  templateUrl: './game-edit.component.html',
  styleUrls: ['./game-edit.component.css']
})
export class GameEditComponent implements OnInit {

game: Game;
gameId: number;
buttonNo: ['No', false];
buttonYes: ['Yes', true];

  constructor(
    private gameService: GameService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
 const id = +this.route.snapshot.paramMap.get('id');
 this.gameService.getGameById(id).subscribe((game: Game) => this.game = game);
  }

  onUpdateGame(): void {
    this.gameService.updateGame(this.game).subscribe(data => {
      console.log(data);
      swal('Success' , 'Your update was successful' , 'success').then(() => {
        this.navigateBack();
      }
    );
    });
  }

  onDeleteGame(): void {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this file!',
      icon: 'warning',
      buttons: ['Cencel', 'Ok'],
      dangerMode: true
    // Add OK button to delete game, I use only one button
    })
    .then((willDelete) => {
      this.gameService.deleteGame(this.game.GameID).subscribe(data => {console.log(data); });
      if (willDelete) {
        swal('Game has been deleted!', {
          icon: 'success'});
          this.navigateBack();
      } else {
        swal('Your Game is safe!');
      }
    });

  }
  navigateBack(): void {
    this.router.navigate(['View']);
  }
}
