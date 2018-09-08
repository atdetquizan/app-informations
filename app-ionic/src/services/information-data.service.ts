import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class InformationDataService {

    url: string;
    constructor(public db: AngularFireDatabase) {
        this.url = 'information';
    }

    public getAll(limit: number) {
        return this.db.list(`/${this.url}/`, ref => ref.orderByChild('creationdate')
            .limitToLast(limit)).valueChanges();
    }
}
