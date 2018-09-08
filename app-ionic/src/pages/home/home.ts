import { Component, ViewChild } from '@angular/core';
import { NavController, Content } from 'ionic-angular';
import { Observable } from 'rxjs';
import { InformationDataService } from '../../services/information-data.service';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    items: Observable<any[]>;
    scrollTop: any;
    limit: number = 0;
    @ViewChild(Content) content: Content;
    constructor(
        public navCtrl: NavController,
        public informationDataService: InformationDataService
    ) {
        this.loadInformations();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad DrugsPage');
    }

    scrollHandler(event) {
        console.log(event);
        this.scrollTop = event.scrollTop;
    }

    doInfinite(infiniteScroll) {
        setTimeout(() => {
            this.loadInformations();
            infiniteScroll.complete();
        }, 500);
    }

    loadInformations() {
        this.limit += 5;
        this.items = this.informationDataService.getAll(this.limit);
    }
}
