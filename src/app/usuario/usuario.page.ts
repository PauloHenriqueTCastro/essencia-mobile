import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-usuario',
  templateUrl: 'usuario.page.html',
  styleUrls: ['usuario.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class UsuarioPage {
  constructor() {}
}
