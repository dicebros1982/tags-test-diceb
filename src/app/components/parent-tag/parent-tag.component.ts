import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-parent-tag",
  templateUrl: "./parent-tag.component.html",
  styleUrls: ["./parent-tag.component.css"]
})
export class ParentTagComponent implements OnInit {
  @Input() test: Array<Object>;

  constructor() {}

  ngOnInit() {}
}
