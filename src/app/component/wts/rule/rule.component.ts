import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Rule } from '../wts.model';
import { WtsServiceService } from '../../../wts-service.service';
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
  constructor(private wtsServiceService: WtsServiceService) { }

  ngOnInit() {
  }
  private removeRule() {
    delete this.rule;
  }
  private triggerHanlder() {
    this.wtsServiceService.triggerCallBack();
  }
}
