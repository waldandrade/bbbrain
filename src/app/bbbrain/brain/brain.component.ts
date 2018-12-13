import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

class Brain {
  id: number
}

@Component({
  selector: 'app-brain',
  templateUrl: './brain.component.html',
  styleUrls: ['./brain.component.scss']
})
export class BrainComponent implements OnInit {

  @Input() brain: Brain = {
    id: null
  };

  constructor( private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.brain.id = parseInt(paramMap.get('id'))
    })
  }

}
