import { Component, OnInit } from '@angular/core';
// import { HeroesService, Heroe } from '../../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  buscarHeroe(nombre: string) {
    // console.log(nombre);
    this.router.navigate(['/results', nombre]);
  }

}
