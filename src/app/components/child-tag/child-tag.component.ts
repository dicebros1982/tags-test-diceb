import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-tag',
  templateUrl: './child-tag.component.html',
  styleUrls: ['./child-tag.component.css']
})
export class ChildTagComponent implements OnInit {
@Input() test: Array<Object>;

  constructor() { }

  ngOnInit() {
  }

}