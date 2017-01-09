export class Rule {
    subjectType: string;
    valueType: string;
    subject: string;
    value: string;
    constructor(st = getRandomInt(1, 5), vt = '', s = '', v = '') {
        this.subjectType = st;
        this.valueType = vt;
        this.subject = s;
        this.value = v;
    }
}
export class Group {
    rules: Rule[];
    groups: Group[];
    constructor() {
        this.rules = [];
        this.rules.push(new Rule());
    }
};
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min).toString();
}