import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AthletesListComponent } from './component/athletes-list/athletes-list.component';
import { AthletesInsertComponent } from './component/athletes-insert/athletes-insert.component';
import { RecordsListComponent } from './component/records-list/records-list.component';
import { RecordsInsertComponent } from './component/records-insert/records-insert.component';
import { AthletesUpdateComponent } from './component/athletes-update/athletes-update.component';

const routes: Routes = [
  {path: 'athletes-list', component: AthletesListComponent},
  {path: 'athletes-insert', component: AthletesInsertComponent},
  {path: 'athletes-update', component: AthletesUpdateComponent},
  {path: 'records-list', component: RecordsListComponent},
  {path: 'records-insert', component:RecordsInsertComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
