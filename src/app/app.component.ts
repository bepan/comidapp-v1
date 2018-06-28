import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'File',
        items: [{
          label: 'New',
          icon: 'fa fa-fw fa-plus',
          items: [
              {label: 'Project'},
              {label: 'Other'},
          ]},
          {label: 'Open'},
          {label: 'Quit'}
        ]
      },
      {
        label: 'Edit',
        icon: 'fa fa-fw fa-edit',
        items: [
          {label: 'Undo', icon: 'fas fa-undo'},
          {label: 'Redo', icon: 'fa fa-fw fa-mail-reply'}
        ]
      }
    ];
  }

}
