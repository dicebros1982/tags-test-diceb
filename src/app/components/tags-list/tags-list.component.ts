import { Component, OnInit } from "@angular/core";
import { TagsService } from "../../services/tags.service";
import { Observable } from "rxjs";
import { Section } from "../../models/section";
import { Parent } from "../../models/parent";

@Component({
  selector: "app-tags-list",
  templateUrl: "./tags-list.component.html",
  styleUrls: ["./tags-list.component.css"]
})

// https://stackblitz.com/edit/address-map?file=app%2Fapp.component.ts
export class TagsListComponent implements OnInit {
  items: Observable<any>;

  constructor(private tagsService: TagsService) {
    this.items = this.tagsService.getItems();
  }

  ngOnInit() {}

  getParents(section) {
    const parents = [];

    section.parents.forEach(res => {
      parents.push(...res);
    });
    return parents;
  }

  test(item) {
    console.log("dsdasd" + item);
  }
}
