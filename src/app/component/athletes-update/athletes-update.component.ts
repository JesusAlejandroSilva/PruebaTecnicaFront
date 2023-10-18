import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Athletes } from 'src/app/domain/athletes';
import { AthletesService } from '../services/athletes.service';
import swal from'sweetalert2';

@Component({
  selector: 'app-athletes-update',
  templateUrl: './athletes-update.component.html',
  styleUrls: ['./athletes-update.component.css']
})
export class AthletesUpdateComponent implements OnInit{
  public athletes: Athletes;
  public showMsg: boolean = false;
  public msg: string;
  public type: string;
  public Alert: string;

  constructor(public athletesServices: AthletesService,
    private router: Router, private activatedRoute: ActivatedRoute){
      this.athletes = new Athletes(0, '', '', 0);
      this.msg = '';
      this.type = '';
      this.Alert = '';

  }

  ngOnInit(): void {
    this.athletes = new Athletes(0, '', '', 0);
  }

  public GetById(){
    let course = this.activatedRoute.params['_value'];
    course = course.id
    this.athletesServices.getById(course).subscribe(data => {
    this.athletes = data;
  });
}

  public edit(){
    this.athletesServices.edit(this.athletes).subscribe(data => {
      this.router.navigate(['/athletes-list'])
      swal.fire('Update successfully', this.Alert, 'success')
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'An error has ocurred in the procedure';
      this.type = 'danger'
    });
  }
}
