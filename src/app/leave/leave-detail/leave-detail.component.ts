import { Component, Input, OnInit } from '@angular/core';
import { Leave } from '../leave.model';

@Component({
  selector: 'app-leave-detail',
  templateUrl: './leave-detail.component.html',
  styleUrls: ['./leave-detail.component.css']
})
export class LeaveDetailComponent implements OnInit {

  @Input() leave: Leave;

  constructor() { }

  ngOnInit(): void {
  }

}
