import { Component, OnInit, Input } from '@angular/core';
import { Log } from '../shared/models/log.model';

@Component({
  selector: 'app-log-view',
  templateUrl: './log-view.component.html',
  styleUrls: ['./log-view.component.sass']
})
export class LogViewComponent implements OnInit {

  @Input() logs:Array<Log>;
  @Input() totalHours:number;
  @Input() date:Date;
  
  constructor() { 
  }

  ngOnInit() {

  }

  copyTable() {
    console.log('Copying');
    let table = document.getElementsByClassName('table-view')[0];
    console.log('Table : ', table);
    let range = document.createRange();
    console.log('Range : ', range);
    range.selectNode(table);
    window.getSelection().addRange(range); 
    document.execCommand('copy');
    console.log('Done');
  }

}
