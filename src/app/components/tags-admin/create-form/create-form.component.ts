import { Component, OnInit, ViewChild } from "@angular/core";
import { TagsService } from "../../../services/tags.service";
import { Section } from "../../../models/section";
import { Observable } from "rxjs";
import {
  FormGroup,
  FormBuilder,
  Validators,
  NgForm,
  FormControl
} from "@angular/forms";

@Component({
  selector: "app-create-form",
  templateUrl: "./create-form.component.html",
  styleUrls: ["./create-form.component.css"]
})
export class CreateFormComponent implements OnInit {
  tagForm: FormGroup;
  sections: Observable<any[]>;
  parents: Observable<any[]>;
  isSuccess: boolean = false;

  @ViewChild("formDirective", { static: false }) private formDirective: NgForm;

  constructor(private fb: FormBuilder, private tagService: TagsService) {}

  ngOnInit() {
    this.buildForm();
    this.sections = this.getSections();
    this.setRelationValidators();
  }
  buildForm() {
    this.tagForm = this.fb.group({
      relation: ["parent"],
      name: ["", [Validators.required, Validators.pattern("#\\w+")]],
      description: ["", [Validators.required]],
      section: ["", [Validators.required]],
      parentTag: [""]
    });
  }

  getSections() {
    return this.tagService.getItems();
  }
  // load parent tag based on section input
  getParentTags(input: string) {
    if (input) {
      this.parents = this.tagService.getParentTags(input);
    }
  }
  // dynamically set validators, depending on if it is a parent or a child tag
  setRelationValidators() {
    const parentTagControl = this.tagForm.get("parentTag");

    this.tagForm.get("relation").valueChanges.subscribe(relation => {
      if (relation === "parent") {
        parentTagControl.setValidators(null);
      }
      if (relation === "child") {
        parentTagControl.setValidators([Validators.required]);
      }
      parentTagControl.updateValueAndValidity();
    });
  }
  // getters for displaying validation errors
  get name() {
    return this.tagForm.get("name");
  }
  get description() {
    return this.tagForm.get("description");
  }
  get section() {
    return this.tagForm.get("section");
  }
  get parentTag() {
    return this.tagForm.get("parentTag");
  }

  async onSubmit() {
    const relation = this.tagForm.value.relation;
    console.log(relation);
    try {
      if (relation === "parent") {
        this.submitParent();
      }
      if (relation === "child") {
        this.submitChild();
      }
      this.isSuccess = true;
      this.formDirective.resetForm();

      this.buildForm();

      this.tagForm.value.relation = "parent";
    } catch (error) {
      console.log(error);
    }
  }
  submitParent() {
    const formVal = this.tagForm.value;
    //const created = new Date();
    const name = formVal.name;
    //const description = formVal.description;
    const section = formVal.section;
    this.tagService.createParentTag(section, name);
    //this.tagService.submitParent(pushVal);
  }

  submitChild() {
    console.log("child");
  }
}
