import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationComponent } from './information.component';
import { AccessoriesModule } from '../accessories/accessories.module';

import { AgGridModule } from 'ag-grid-angular';
import { environment } from '../../environments/environment.prod';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { InformationListComponent } from './information-list/information-list.component';
import { InformationNewComponent } from './information-new/information-new.component';
import { InformationDataService } from './information-shared/information-data.service';
import { InformationRoutingModule } from './information-routing.module';
import { RouterModule } from '@angular/router';
import { ControlMessagesModule } from 'src/app/accessories/control-messages/control-messages.module';
import { FormService } from '../accessories/accessories-shared/form.service';
import { InformationEditComponent } from 'src/app/information/information-edit/information-edit.component';
import { InformationViewComponent } from './information-view/information-view.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppInterceptor } from 'src/app/interceptor/app-interceptor';

const INFORMATION_PROVIDERS = [
  InformationDataService,
  FormService
];
@NgModule({
  imports: [
    InformationRoutingModule,
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    AccessoriesModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase, 'my-app-name'),
    AngularFireDatabaseModule,
    AgGridModule.withComponents([]),
    ControlMessagesModule
  ],
  declarations: [
    InformationComponent,
    InformationListComponent,
    InformationNewComponent,
    InformationEditComponent,
    InformationViewComponent
  ],
  exports: [],
  entryComponents: [
    InformationNewComponent,
    InformationEditComponent,
    InformationViewComponent
  ],
  providers: [
    INFORMATION_PROVIDERS,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true
    }
  ]
})
export class InformationModule { }
