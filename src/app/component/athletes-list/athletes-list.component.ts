import { Component, OnDestroy, OnInit } from '@angular/core';
import { Athletes } from 'src/app/domain/athletes';
import { Subscription } from 'rxjs';
import { AthletesService } from '../services/athletes.service';

@Component({
  selector: 'app-athletes-list',
  templateUrl: './athletes-list.component.html',
  styleUrls: ['./athletes-list.component.css']
})
export class AthletesListComponent implements OnInit, OnDestroy {

  public athletes: Athletes[];
  public subAthletes: Subscription;

  constructor(public athletesService: AthletesService){
    this.athletes = [];
    this.subAthletes = new Subscription();
  }


  ngOnDestroy(): void {
    this.subAthletes.unsubscribe();
  }

  ngOnInit(): void {
    this.subAthletes = new Subscription();
    this.getAll();
  }

  getAll(){
    this.subAthletes = this.athletesService.getAll().subscribe(data =>{
      this.athletes = data;
    });
  }
}
