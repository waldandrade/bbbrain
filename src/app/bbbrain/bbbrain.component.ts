import { Component, OnInit } from '@angular/core';

export interface Page {
  id: number,
  name: string;
  icon: string;
}

@Component({
  selector: 'app-bbbrain',
  templateUrl: './bbbrain.component.html',
  styleUrls: ['./bbbrain.component.scss']
})
export class BbbrainComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
