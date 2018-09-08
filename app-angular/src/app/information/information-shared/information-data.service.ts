import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Information } from './information';

@Injectable({
  providedIn: 'root'
})
export class InformationDataService {

  url: string;
  constructor(public db: AngularFireDatabase) {
    this.url = 'information';
  }

  getAll() {
    return this.db.list(`/${this.url}/`).valueChanges();
  }

  getById(informationId: string) {
    return this.db.list(`/${this.url}/${informationId}`).valueChanges();
  }

  insert(information: Information) {
    information.id = String(new Date().getTime());
    return this.db.object(`/${this.url}/` + information.id).set(information).then(_ => true)
      .catch(err => {
        console.log(err, 'Error!');
        return false;
      });
  }

  delete(informationId: string) {
    console.log(informationId);
    return this.db.list(`/${this.url}/`).remove(informationId).then(_ => true)
      .catch(err => {
        console.log(err, 'Error!');
        return false;
      });
  }

  update(information: Information) {
    return this.db.object(`/${this.url}/` + information.id).update(information).then(_ => true)
      .catch(err => {
        console.log(err, 'Error!');
        return false;
      });
  }

}

// INSERT
// this.db.object('/item/' + new Date().getTime()).set({
//   title: "Tile " + new Date().getTime(),
//   date: new Date().toDateString()
// })
