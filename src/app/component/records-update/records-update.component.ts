import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Register } from 'src/app/domain/register';
import { RecordsService } from '../services/records.service';
import swal from'sweetalert2';
@Component({
  selector: 'app-records-update',
  templateUrl: './records-update.component.html',
  styleUrls: ['./records-update.component.css']
})
export class RecordsUpdateComponent {
  
  public register: Register;
  public showMsg: boolean = false;
  public msg: string;
  public type: string;
  public Alert: string;

  constructor(public recordsService: RecordsService, private activatedRoute: ActivatedRoute,
    private router: Router){
      this.msg = '';
      this.type = '';
      this.Alert = '';

  }

  ngOnInit(): void {
  }

  public GetById(){
    let records = this.activatedRoute.params['_value'];
    records = records.id
    this.recordsService.getById(records).subscribe(data => {
    this.recordsService = data;
  });
}

  public edit(){
    this.recordsService.edit(this.register).subscribe(data => {
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
