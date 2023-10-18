import { Component, OnDestroy, OnInit } from '@angular/core';
import { Register } from 'src/app/domain/register';
import { Subscription } from 'rxjs';
import { RecordsService } from '../services/records.service';

@Component({
  selector: 'app-records-list',
  templateUrl: './records-list.component.html',
  styleUrls: ['./records-list.component.css']
})
export class RecordsListComponent implements OnInit, OnDestroy {

  public register: Register[];
  public sregister: Subscription;


  constructor(public registerService : RecordsService)
  { 
  }
  ngOnDestroy(): void {
    this.sregister.unsubscribe();
  }
  
  ngOnInit(): void {
    this.sregister = new Subscription();
    this.getAll();
  }

  getAll(){
    this.sregister = this.registerService.getAll().subscribe(data => {
      this.register = data;
    });
  }


}
