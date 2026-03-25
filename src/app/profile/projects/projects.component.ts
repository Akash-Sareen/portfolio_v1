import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
    standalone: false
})
export class ProjectsComponent implements OnInit {
  config: any;
  projects: any = [];
  wordLimit = 100;
  expanded: boolean[] = [];

  constructor(private profileService:ProfileService) { }

  ngOnInit() {
    this.projects = this.profileService.getProjects()
    console.log(this.projects)
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.projects.length
    };
    this.expanded = new Array(this.projects.length).fill(false);
  }

  pageChanged(event: any){
    this.config.currentPage = event;
  }

  toggleExpand(index: number) {
    this.expanded[index] = !this.expanded[index];
  }

  getTruncatedText(text: string, limit: number): string {
    return text.split(' ').slice(0, limit).join(' ') + (text.split(' ').length > limit ? '...' : '');
  }
}
