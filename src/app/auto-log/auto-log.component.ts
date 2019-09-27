import { Component, OnInit } from '@angular/core';
import { Log } from '../shared/models/log.model';

@Component({
  selector: 'app-auto-log',
  templateUrl: './auto-log.component.html',
  styleUrls: ['./auto-log.component.sass']
})
export class AutoLogComponent implements OnInit {

  jsonLog:string;
  date:Date;
  logs:Array<Log>;
  name:string;
  showLogs:boolean;
  logsDisplay:Array<Log>;
  totalHours:Number;

  constructor() { 
    this.jsonLog = '';
    this.date = null;
    this.logs = [];
    this.name = '';
    this.logsDisplay = [];
    this.showLogs = false;
    this.totalHours = 0;
  }

  ngOnInit() {
  }

  addLog(data) {
    console.log('Data : ', data);
    this.totalHours += data.hours;
    let index = this.logs.findIndex((item) => {return item.id == data.id; });
    if(index == -1) {
      this.logs.push(data);
    }
    else {
      this.logs[index].hours += data.hours;
    }
  }

  generateLog() {
    this.totalHours = 0;
    // console.log('Date : ', this.date);
    let uiDate = new Date(this.date);
    let json = JSON.parse(this.jsonLog);
    // console.log('JSON : ', json);
    if(json.hasOwnProperty('issues')) {
      for(let index in json.issues) {
        let issue = json.issues[index];
        console.log('Issue Name : ', issue.fields.summary);
        for(let index in issue.fields.worklog.worklogs) {
          let worklog = issue.fields.worklog.worklogs[index];
          if(issue.fields.summary == 'General Timelog') {
            console.log(worklog);
          }
          let worklogDate = new Date(worklog.started);
          let isSameDate = uiDate.getDate() == worklogDate.getDate() && uiDate.getMonth() == worklogDate.getMonth() && uiDate.getFullYear() == worklogDate.getFullYear() ? true : false;
          if(worklog.author.displayName.toLowerCase() == this.name.toLowerCase() && isSameDate) {
            let link = issue.self.split('/rest')[0] + '/browse/' + issue.key;
            this.addLog({id : worklog.issueId, title : issue.fields.summary, project : issue.fields.project.name, link : link, hours : worklog.timeSpentSeconds/(60*60)});
          }
          // console.log('Worklog : ', worklog);
        }
        // console.log('Issue : ', issue);
      }
    }

    console.log('Log : ', this.logs);
    this.showLogs = true;
    this.logsDisplay = [];
    this.logsDisplay = [...this.logs];
  }

}
