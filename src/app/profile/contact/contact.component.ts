import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    standalone: false
})
export class ContactComponent implements OnInit {
 
  model: any = {};

  constructor(){}

  ngOnInit() {
     }


}
