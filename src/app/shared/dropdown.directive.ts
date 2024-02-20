import { Directive,ElementRef, HostBinding, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.open') isOpen: boolean= false;
  
  constructor(private elRef: ElementRef) {}
  ngOnInit(): void {}
      
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  //click anywhere close the dropdown or remove class
     
  
      
  // @HostListener('click') toggleOpen(){
  //   this.isopen = !this.isopen;
  //  } if only that button click then only close dropdown or  remove class
     
  

}
