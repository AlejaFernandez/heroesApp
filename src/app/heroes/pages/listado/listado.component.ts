import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
    
  ]
})
export class ListadoComponent implements OnInit {

  constructor( private heroesService: HeroesService ) { }

  heroes: Heroe[]=[];

  ngOnInit(): void {
    this.heroesService.getHeroes()
      .subscribe(( heroes: Heroe[] )=> {this.heroes= heroes});
  }
  mostrarHeroes(){

  }
}
