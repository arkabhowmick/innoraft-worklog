import { Component, OnInit, Input, Output } from '@angular/core';
import { Log } from '../shared/models/log.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.sass']
})
export class LogComponent implements OnInit {

  @Input() log : Log;
  @Output() onDelete : EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    console.log('Log : ', this.log);
  }

  deleteLog(id) {
    this.onDelete.emit(id);
  }

}
