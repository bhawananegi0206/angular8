import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() options;
  @Input() selectedOption;
  @Output() newOption =  new EventEmitter<any>();
  @Input() dropdownId;

  constructor() { }

  ngOnInit() {
  this.selectedOption =5;
  }
  changeOption(){
    this.newOption.emit(this.selectedOption);
  }
}
