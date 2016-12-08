import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'oops',
    template: '<h1>Ooops wrong page</h1>'
})
export class OopsComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}