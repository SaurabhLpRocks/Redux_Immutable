import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Rule } from '../wts.model';
@Component({
  selector: 'rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RuleComponent implements OnInit {
  rule: Rule;
  @Input('rule')
  set Setrule(value) {
    this.rule = value;
  }
  constructor() { }

  ngOnInit() {
  }
  private removeRule() {
    delete this.rule;
  }
}
