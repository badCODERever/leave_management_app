import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Leave } from '../leave.model';

@Component({
  selector: 'app-leave-list',
  templateUrl: './leave-list.component.html',
  styleUrls: ['./leave-list.component.css']
})
export class LeaveListComponent implements OnInit {

  @Input() leave: Leave;
  @Output() leaveClicked= new EventEmitter<Leave>();

  leaves: Leave[] = [
    new Leave('Sick Leave', 1, 'Approved', 'root canal'),
    new Leave('Optional Leave', 2, 'Pending', 'vacation'),
    new Leave('Privilege Leave', 3, 'Rejected', 'friend wedding'),
    new Leave('Privilege Leave', 3, 'Rejected', 'friend wedding')

  ];
  constructor() { }

  ngOnInit(): void {
  }

  onLeaveSelected(leave: Leave) {
    this.leaveClicked.emit(leave);
  }
}
