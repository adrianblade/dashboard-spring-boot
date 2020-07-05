import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  items = ['First', 'Second', 'Third', 'Four', 'Five', 'Six', 'Seven', 'Eight'];
  constructor() { }

  ngOnInit(): void {
  }

}
