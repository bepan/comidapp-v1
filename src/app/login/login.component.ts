import { Component, OnInit } from '@angular/core';
import { ipcRenderer } from 'electron';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    // ipcRenderer.send('item:init', 'foo');
  }

  submit(e) {
    e.preventDefault();
    ipcRenderer.send('item:add', 'foo');
    this.router.navigate(['/collection']);
  }

}
