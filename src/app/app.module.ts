import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDetailsService } from './service/employee-details.service';
import { MenuComponent } from './menu/menu.component';
import { SharedModule } from './pipe/shared.module';
import { Paginationservice} from  './service/pagination.service';
import { EmployeeRecordsComponent } from './employee-records/employee-records.component';
import { LoaderCircleComponent } from './shared/loader-circle/loader-circle.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EmployeeRecordsComponent,
    LoaderCircleComponent,
    DropdownComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    EmployeeDetailsService,
    Paginationservice
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }