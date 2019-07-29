import { Component } from '@angular/core';
import { Log } from './shared/models/log.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
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
