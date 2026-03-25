import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss'],
    standalone: false
})
export class ExperienceComponent implements OnInit {

workexp: any

  constructor(private profileService:ProfileService) { }

    ngOnInit() {

      this.workexp =  this.profileService.exprience()
    }
}
