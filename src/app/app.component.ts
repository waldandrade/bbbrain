import { Component } from '@angular/core';

export interface Page {
  name: string;
  route: string;
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
      name: 'Photos',
      route: '/',
      icon: 'folder'
    },
    {
      name: 'Recipes',
      route: '/',
      icon: 'folder'
    },
    {
      name: 'Work',
      route: '/',
      icon: 'folder'
    }
  ];
}
