import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { InformationDataService } from '../information-shared/information-data.service';
import { Information } from '../information-shared/information';
import swal from 'sweetalert';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment.prod';
import { FormService } from '../../accessories/accessories-shared/form.service';

@Component({
  selector: 'app-information-new',
  templateUrl: './information-new.component.html',
  styleUrls: ['./information-new.component.css']
})
export class InformationNewComponent implements OnInit {
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
    //
  }

  onClickClose() {
    this.modalRef.hide();
  }

  onClickSave() {
    this.formService.markFormGroupTouched(this.formInformation);
    if (this.formInformation.valid) {
      const values = this.formInformation.value;
      const information: Information = new Information();
      information.title = values.title;
      information.description = values.description;
      information.creationdate = new Date().toDateString();
      information.image = this.fileBinaryString;
      information.file = this.getFile();
      this.informationDataService.insert(information)
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
  }

  private createForm() {
    this.formInformation = this.fb.group({
      title: [null, [Validators.required, Validators.minLength(10)]],
      description: [null, [Validators.required, Validators.minLength(10)]],
      file: [null, [Validators.required]]
    });
  }

  private getFile() {
    return {
      name: this.file.name,
      size: this.file.size
    };
  }
}
