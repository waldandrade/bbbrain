import { Component } from '@angular/core';

export interface Page {
  id: number,
  name: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bbbrain';
  pages: Page[] = [
    {
      id: 1,
      name: 'Photos',
      icon: 'folder'
    },
    {
      id: 2,
      name: 'Recipes',
      icon: 'folder'
    },
    {
      id: 3,
      name: 'Work',
      icon: 'folder'
    }
  ];
}
