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

@Component({
  selector: "app-samples",
  templateUrl: "./samples.component.html",
  styleUrls: ["./samples.component.css"],
})
export class SamplesComponent implements OnInit {
  enabledButton = true;
  textvalue: "";

  ngOnInit() {
    this.textvalue = "";
    this.enabledButton = false;
  }

  onInputTextEvent() {
    this.enabledButton = this.textvalue.length ? true : false;
  }
}
