import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Athletes } from 'src/app/domain/athletes';
import { AthletesService } from '../services/athletes.service';
import swal from'sweetalert2';


@Component({
  selector: 'app-athletes-insert',
  templateUrl: './athletes-insert.component.html',
  styleUrls: ['./athletes-insert.component.css']
})
export class AthletesInsertComponent implements OnInit{

  public athletes: Athletes;
  public showMsg: boolean = false;
  public msg: string;
  public type: string;
  public Alert: string;

  constructor(public athletesServices: AthletesService,
    private router: Router){
      this.athletes = new Athletes(0, '', '', 0);
      this.msg = '';
      this.type = '';
      this.Alert = '';

  }

  ngOnInit(): void {
    this.athletes = new Athletes(0, '', '', 0);
  }

  public save(){
    this.athletesServices.save(this.athletes).subscribe(data => {
      this.router.navigate(['/athletes-list'])
      swal.fire('Saved successfully', this.Alert, 'success')
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'An error has ocurred in the procedure';
      this.type = 'danger'
    });
  }


}
