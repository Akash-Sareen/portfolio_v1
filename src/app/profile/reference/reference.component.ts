import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-reference',
    templateUrl: './reference.component.html',
    styleUrls: ['./reference.component.scss'],
    standalone: false
})
export class ReferenceComponent implements OnInit {

  // Add a property to track which references are expanded
  expanded: boolean[] = [false, false, false];

  constructor() { }

  ngOnInit() {
  }

  // Method to toggle the expanded state
  toggleExpand(index: number) {
    this.expanded[index] = !this.expanded[index];
  }

  // Method to get the truncated text
  getTruncatedText(text: string, limit: number): string {
    let words = text.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return text;
  }

}
