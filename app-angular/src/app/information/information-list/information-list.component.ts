import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { InformationDataService } from '../information-shared/information-data.service';
import { Information } from '../information-shared/information';
import { BsModalService } from 'ngx-bootstrap/modal';
import swal from 'sweetalert';
import { InformationNewComponent } from '../information-new/information-new.component';
import { CellRendererExtent } from 'src/app/accessories/accessories-shared/cell-renderer-extent';
import { InformationEditComponent } from '../information-edit/information-edit.component';
import { InformationViewComponent } from '../information-view/information-view.component';
import { environment } from 'src/environments/environment.prod';

@Component({
    selector: 'app-information-list',
    templateUrl: './information-list.component.html',
    styleUrls: ['./information-list.component.css']
})
export class InformationListComponent implements OnInit {

    gridApi: any;
    selectItem: any;
    columnDefs = [
        {
            headerName: 'Item',
            cellRenderer: CellRendererExtent.itemCellRendered,
            width: 70
        },
        {
            headerName: 'Titulo',
            field: 'title',
            width: 250
        },
        {
            headerName: 'Descripción',
            field: 'description',
            width: 250
        },
        {
            headerName: 'Fecha Creación',
            field: 'creationdate',
            cellStyle: { 'text-align': 'center' },
            width: 200,
            cellRenderer: CellRendererExtent.itemCelllRenderedDate
        },
        {
            headerName: 'Imagen',
            field: 'image',
            cellStyle: { 'text-align': 'center' },
            width: 100,
            cellRenderer: CellRendererExtent.itemCellRenderedFile
        }
    ];

    rowData: Information[];

    constructor(
        private informationDataService: InformationDataService,
        private bsModalService: BsModalService
    ) {
        //
    }

    ngOnInit() {
        this.loadInformations();
    }

    onRowClicked(item: any) {
        this.selectItem = item.data;
    }

    onGridReady(params) {
        this.gridApi = params.api;
    }

    loadInformations() {
        this.informationDataService.getAll()
            .subscribe((res: Information[]) => this.rowData = res);
    }

    async onClickDelete(item: any) {


        const willDelete = await swal({
            title: 'Eliminar registro',
            text: '¿Está seguro que desea eliminar?',
            icon: 'warning',
            dangerMode: true,
        });
        if (willDelete) {
            this.informationDataService.delete(item.id).then(_ => {
                swal(environment.messages.delete.title,
                    environment.messages.delete.message,
                    environment.messages.delete.type)
                    .then(__ => this.selectItem = null);
            });
        }
    }

    onClickNew() {
        const initialState = {};
        this.bsModalService.show(InformationNewComponent, { class: 'modal-xs modal-dialog-centered', animated: true, initialState });
    }

    onClickEdit(item: any) {
        const initialState = {
            selectItem: this.selectItem
        };
        this.bsModalService.show(InformationEditComponent, { class: 'modal-xs modal-dialog-centered', animated: true, initialState });
    }

    onClickSearch(item: any) {
        const initialState = {
            selectItem: this.selectItem
        };
        this.bsModalService.show(InformationViewComponent, { class: 'modal-xs modal-dialog-centered', animated: true, initialState });
    }

}
