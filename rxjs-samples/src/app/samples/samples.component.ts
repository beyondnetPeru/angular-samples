import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import {
  concat,
  fromEvent,
  interval,
  noop,
  observable,
  Observable,
  of,
  timer,
  merge,
  Subject,
  BehaviorSubject,
  AsyncSubject,
  ReplaySubject,
} from "rxjs";
import { delayWhen, filter, map, take, timeout } from "rxjs/operators";
import { createHttpObservable } from "../common/util";
import { Timestamp } from "rxjs/internal-compatibility";

@Component({
  selector: "app-samples",
  templateUrl: "./samples.component.html",
  styleUrls: ["./samples.component.css"],
})
export class SamplesComponent implements OnInit {
  enabledButton = true;
  textvalue: "";
  showPassword = false;
  clicks: Array<string>;

  ngOnInit() {
    this.textvalue = "";
    this.clicks = new Array<string>();
  }

  onInputTextEvent() {
    this.enabledButton = this.textvalue.length ? true : false;
  }

  onDisplayDetails() {
    this.showPassword = !this.showPassword;

    // this.clicks.push(`${this.clicks.length + 1}`);
    this.clicks.push(`${new Date()}`);
  }

  getColor() {
    return this.clicks.length > 3 ? "blue" : "white";
  }
}
