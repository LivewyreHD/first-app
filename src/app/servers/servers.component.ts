import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.less']
})
export class ServersComponent implements OnInit {
	allowNewServer = false;
	serverCreationStatus = 'No Server Was Created';
	serverName = '';
	serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  constructor() { 
  	setTimeout(() => {
  		this.allowNewServer = true;
  	},2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
  	this.serverCreated = true;
    this.servers.push(this.serverName);
  	this.serverCreationStatus = 'Server Was Created, Name Is ' + this.serverName;
  }

  onUpdateServerName (event: Event){
  	this.serverName = (<HTMLInputElement>event.target).value;
  }
}
