import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Group, Rule } from './wts.model';
import { WtsServiceService } from '../../wts-service.service';

@Component({
    selector: 'wts',
    templateUrl: './wts.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WTSComponent implements OnInit {
    rules: Group;
    enableRemoveGroup: boolean = false;
    @Output() removeGroupCB = new EventEmitter();
    @Input('data')
    set data(value) {
        if (value) {
            this.enableRemoveGroup = true;
        }
        this.rules = value || new Group();
    };
    constructor(private wtsServiceService: WtsServiceService) {
        this.rules = new Group();
    }
    private addGroup() {
        if (!this.rules.groups) {
            this.rules.groups = [];
        }
        this.rules.groups.push(new Group());
        console.log(this.rules);
    }
    private removeGroup() {
        delete this.rules;
    }
    private addRule() {
        this.rules.rules.push(new Rule());
    }
    ngOnInit() { }
}


