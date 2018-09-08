import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-information-view',
  templateUrl: './information-view.component.html',
  styleUrls: ['./information-view.component.css']
})
export class InformationViewComponent implements OnInit {
  selectItem: any;
  @Output() closeEvents: EventEmitter<any> = new EventEmitter();
  constructor(private modalRef: BsModalRef) { }

  ngOnInit() {
    //
  }

  onClickClose() {
    this.closeEvents.emit(false);
    this.modalRef.hide();
  }
}
