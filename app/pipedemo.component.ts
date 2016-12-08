import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'demopipe',
    templateUrl: 'demopipe.component.html',
})
export class PipeDemoComponent implements OnInit {
     items : Item[] = [];
     constructor() {
         for(var i = 0; i < 100; i++){
             var item = new Item();
             item.name = "Name"+i;
             this.items.push(item);
         }
     }
    ngOnInit() { }
}
export class Item {
    name :string
}