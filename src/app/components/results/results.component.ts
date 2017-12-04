import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent implements OnInit {

  results: Heroe[] = [];

  constructor(  private activatedRoute: ActivatedRoute,
                private heroeService: HeroesService) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {

      this.results = this.heroeService.findHeroes(params['q']);
      // console.log(this.results);

    });
  }

}
