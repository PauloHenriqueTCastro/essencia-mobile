import { Component } from '@angular/core';
import { IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-user',
  templateUrl: 'user.page.html',
  styleUrls: ['user.page.scss'],
  imports: [IonButton, IonContent],
})
export class UserPage {
  constructor() {}
}
