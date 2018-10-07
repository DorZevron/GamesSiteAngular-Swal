import { GameService } from './../game.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-game-new',
  templateUrl: './game-new.component.html',
  styleUrls: ['./game-new.component.css']
})
export class GameNewComponent implements OnInit {

  constructor(
    private gameService: GameService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: any) {
    console.log(form.value);
    if (form.value !== null ) {
      this.gameService.addNewGame(form.value).subscribe(data => {
        console.log(data);
        swal('Done!', 'Adding a new game', 'success')
        .then(() => {
          this.router.navigate(['View']);
        });
      });
    } else {
      swal('Error', 'All text boxes must be filled', 'error' );
      }

  }
}
