import {Directive, ElementRef,Renderer,HostListener} from '@angular/core';
@Directive({
    selector: '[highlighter]',
})
export class HighlighterDirective {
    element : ElementRef;
    renderer : Renderer;
    constructor(ref: ElementRef , renderer:Renderer) {
        //console.log('Enabled......................')
        this.element = ref;
        this.renderer = renderer;    
    }
    @HostListener('mouseenter') onMouseEnter() {
        this.element.nativeElement.style.backgroundColor = 'brown';
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.element.nativeElement.style.backgroundColor = '#222222';
    }
}