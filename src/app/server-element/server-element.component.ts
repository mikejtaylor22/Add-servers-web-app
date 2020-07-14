import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChange, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';
import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None, Native
})
export class ServerElementComponent implements OnInit, 
OnChanges, 
DoCheck, 
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {

@Input('srvElement') element: {type: string, name:string, content: string};
@Input() name: string;
@ViewChild('heading', { static: true }) header:ElementRef;
@ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;
  constructor() {
    console.log('contructor called!');
   }

  ngOnInit() {
    console.log('NGoninit called')
    console.log('text content' + this.header.nativeElement.textContent);
    console.log('text content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('NG on changes called!');
  }
  ngDoCheck(){
    console.log('NgDocheck called');
  }

  ngAfterContentInit(){
    console.log('NG content init called')
    console.log('text content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(){
    console.log('NG content checked called')
  }
  ngOnDestroy(){

  }
  ngAfterViewInit(){
    console.log('After view init called')
  }

}
