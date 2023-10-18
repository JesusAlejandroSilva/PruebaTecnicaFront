import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AthletesListComponent } from './component/athletes-list/athletes-list.component';
import { AthletesInsertComponent } from './component/athletes-insert/athletes-insert.component';
import { AthletesUpdateComponent } from './component/athletes-update/athletes-update.component';
import { AthletesDeleteComponent } from './component/athletes-delete/athletes-delete.component';
import { RecordsListComponent } from './component/records-list/records-list.component';
import { RecordsInsertComponent } from './component/records-insert/records-insert.component';
import { RecordsUpdateComponent } from './component/records-update/records-update.component';
import { RecordsDeleteComponent } from './component/records-delete/records-delete.component';
import { AthletesService } from './component/services/athletes.service';

@NgModule({
  declarations: [
    AppComponent,
    AthletesListComponent,
    AthletesInsertComponent,
    AthletesUpdateComponent,
    AthletesDeleteComponent,
    RecordsListComponent,
    RecordsInsertComponent,
    RecordsUpdateComponent,
    RecordsDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [
    AthletesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
