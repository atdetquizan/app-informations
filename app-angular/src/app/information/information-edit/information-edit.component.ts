import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Information } from 'src/app/information/information-shared/information';
import { environment } from 'src/environments/environment.prod';
import { InformationDataService } from 'src/app/information/information-shared/information-data.service';
import { BsModalRef } from 'ngx-bootstrap';
import { FormService } from 'src/app/accessories/accessories-shared/form.service';

@Component({
  selector: 'app-information-edit',
  templateUrl: './information-edit.component.html',
  styleUrls: ['./information-edit.component.css']
})
export class InformationEditComponent implements OnInit {
  selectItem: any;
  formInformation: FormGroup;
  file: any;
  fileBinaryString: any;
  constructor(
    private fb: FormBuilder,
    private modalRef: BsModalRef,
    private informationDataService: InformationDataService,
    public formService: FormService
  ) {
    this.createForm();
  }

  ngOnInit() {
    if (this.selectItem) {
      this.file = this.selectItem.file;
      const item = this.selectItem;
      item.file = null;
      this.formInformation.patchValue(this.selectItem);
    }
  }

  onClickClose() {
    this.modalRef.hide();
  }

  onClickEdit() {
    this.formService.markFormGroupTouched(this.formInformation);
    if (this.formInformation.valid) {
      const values = this.formInformation.value;
      const information: Information = new Information();
      information.id = values.id;
      information.title = values.title;
      information.description = values.description;
      information.creationdate = values.creationdate;
      information.image = this.fileBinaryString ? this.fileBinaryString : values.image;
      information.file = this.getFile();
      this.informationDataService.update(information)
        .then(_ => {
          swal(environment.messages.success.title,
            environment.messages.success.message,
            environment.messages.success.type)
            .then((value) => {
              this.modalRef.hide();
            });
        });
    }
  }

  onClickBrowse() {
    const inputfile = document.getElementById('imput-file');
    inputfile.click();
  }

  onChangeFile(e) {
    this.file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.fileBinaryString = reader.result;
    };
    reader.readAsDataURL(this.file);
  }

  removeItem() {
    this.file = null;
    this.fileBinaryString = null;
    const fileControl = this.formInformation.controls['file'];
    fileControl.setValue(null);
    this.formService.UpdateValidators(fileControl);
    // this.formInformation.controls['file'].setValidators([Validators.required]);
    // this.formInformation.controls['file'].updateValueAndValidity();
  }

  private createForm() {
    this.formInformation = this.fb.group({
      id: [null, null],
      title: [null, [Validators.required, Validators.minLength(10)]],
      description: [null, [Validators.required, Validators.minLength(10)]],
      creationdate: [null, null],
      file: [null, null],
      image: [null, null]
    });
  }

  private getFile() {
    return this.file ? {
      name: this.file.name,
      size: this.file.size
    } : null;
  }

}
