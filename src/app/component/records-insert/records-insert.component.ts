import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Register } from 'src/app/domain/register';
import { RecordsService } from '../services/records.service';
import swal from'sweetalert2';

@Component({
  selector: 'app-records-insert',
  templateUrl: './records-insert.component.html',
  styleUrls: ['./records-insert.component.css']
})
export class RecordsInsertComponent implements OnInit {

  public register: Register;
  public showMsg: boolean = false;
  public msg: string;
  public type: string;
  public Alert: string;

  constructor(public recordsService: RecordsService,
    private router: Router){
      this.msg = '';
      this.type = '';
      this.Alert = '';

  }

  ngOnInit(): void {
  }
  

  public save(){
    this.recordsService.save(this.register).subscribe(data => {
      this.router.navigate(['/records-list'])
      swal.fire('Saved successfully', this.Alert, 'success')
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'An error has ocurred in the procedure';
      this.type = 'danger'
    });
  }

}
