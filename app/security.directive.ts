import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';
import { SessionStorage, SessionStorageService } from "ng2-webstorage";

@Directive(
    { selector: "[secured]" }
)
export class SecurityDirective {
    constructor(sessionStorage: SessionStorageService, elRef: ElementRef) {
        if (sessionStorage.retrieve("username")) {
            elRef.nativeElement.style.visibility = 'visibile';
        }else{
            elRef.nativeElement.style.visibility = 'hidden';
        }
    }
}