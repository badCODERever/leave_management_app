import { Component, OnInit } from '@angular/core';
import { Leave } from './leave.model';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {

  selectedLeave: Leave;

  constructor() { }

  ngOnInit(): void {
  }

}
