import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: Heroe;

  constructor( private activatedRoute: ActivatedRoute,
               private heroeService: HeroesService) {

    // console.log('lupas2');
    this.activatedRoute.params.subscribe( params => {
      // console.log(params['id']);

      // console.log(heroeService.getHeroe(params['id']));
      this.heroe = heroeService.getHeroe(params['id']);

    });


  }



}
