import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { LeaveComponent } from './leave/leave.component';
import { LeaveListComponent } from './leave/leave-list/leave-list.component';
import { LeaveDetailComponent } from './leave/leave-detail/leave-detail.component';
import { LeaveItemComponent } from './leave/leave-list/leave-item/leave-item.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    LeaveComponent,
    LeaveListComponent,
    LeaveDetailComponent,
    LeaveItemComponent,
    AdminUserComponent,
    CalendarComponent,  
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
