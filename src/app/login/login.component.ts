import { Component, OnInit } from '@angular/core';
import { ipcRenderer } from 'electron';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    ipcRenderer.send('item:init', 'foo');
  }

  submit(e) {
    e.preventDefault();
    console.log('submit!');
    ipcRenderer.send('item:add', 'foo');
  }

}
