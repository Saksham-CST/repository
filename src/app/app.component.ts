import { Component, OnInit } from '@angular/core';
import { APIService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'File';
  response: any;
  constructor(private service: APIService) {

  }

  ngOnInit(): void {
    this.getRecords();
  }

  getRecords() {
    this.service.getAPI()
      .subscribe(response => {
        this.response = response;
      })
  }

  submit() {
    let sakshamObject = { "createdAt": "2023-08-16T11:07:08.919Z", "name": "Ellis Kumar", "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1114.jpg", "emailid": "emailid@gmail.com", "age": "age 1", "gender": "gender 1", "address": "address 1", "qualification": "qualification 1", "id": "1" };
    this.service.postAPI(sakshamObject)
      .subscribe(response => {
        this.getRecords();
      })
  }
}
