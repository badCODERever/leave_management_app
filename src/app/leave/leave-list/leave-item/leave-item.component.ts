import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Leave } from '../../leave.model';

@Component({
  selector: 'app-leave-item',
  templateUrl: './leave-item.component.html',
  styleUrls: ['./leave-item.component.css']
})
export class LeaveItemComponent implements OnInit {

  @Input() leave: Leave;
  @Output() leaveSelected = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  getBtnClass(status: string) {
    if (status === 'Approved') {
      return 'btn-success';
    } else if (status === 'Pending') {
      return 'btn-warning';
    } else if (status === 'Rejected') {
      return 'btn-danger'
    }
  }

  onLeaveSelected() {
    this.leaveSelected.emit();
  }

}
