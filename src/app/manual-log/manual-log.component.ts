import { Component, OnInit } from '@angular/core';
import { Log } from '../shared/models/log.model';


@Component({
  selector: 'app-manual-log',
  templateUrl: './manual-log.component.html',
  styleUrls: ['./manual-log.component.sass']
})
export class ManualLogComponent implements OnInit{

  id:number;
  logs:Array<Log>;
  showLogs:boolean;
  logsDisplay:Array<Log>;
  date:Date;
  totalHours:number;

  constructor() {
    this.id = 1;
    this.logs = [];
    this.logsDisplay = [];
    this.showLogs = false;
  }

  ngOnInit() {

  }
  
  addLog() {
    this.logs.push({id : ++this.id, title : '', project : '', link : 'https://innoraft.atlassian.net/browse/', hours : null});
  }

  deleteLog(id) {
    let index = this.logs.findIndex((e) => {return e.id == id});
    this.logs.splice(index, 1);
  }

  generateLog() {
    this.showLogs = true;
    this.logsDisplay = [];
    this.logsDisplay = [...this.logs];
    this.totalHours = 0;
    for(let index in this.logs) {
      this.totalHours += Number(this.logs[index].hours);
    }
    // console.log('Log : ', this.logs);
  }

  clearLogs() {
    this.showLogs = false;
    this.logsDisplay = [];
    this.logs = [];
    this.id = 1;
  }

}

