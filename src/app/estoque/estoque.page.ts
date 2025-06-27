import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-estoque',
  templateUrl: 'estoque.page.html',
  styleUrls: ['estoque.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ]
})
export class EstoquePage {

  constructor() {}

}
