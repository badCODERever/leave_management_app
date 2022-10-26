import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";


@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls:['./user.component.css']
})

export class UserComponent {
    userName='Fero';
    userEmail='fero@fts.com';
    userPhoneNumber='12345';
    userImgPath='';

    leaveInfo = [{leaverType: 'Sick', noOfDays: 1, status: 'pending'}]
} 