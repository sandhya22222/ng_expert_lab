import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  array=['one','two','three'];
  profile=[{name:'sandy',
              age:2022}];

  constructor() { }

  ngOnInit(): void {
  }

}
