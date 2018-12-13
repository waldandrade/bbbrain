import { Component, OnInit, Input, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

class Brain {
  id: number;
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

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route
      .paramMap
      .subscribe(paramMap => {
          this.brain.id = parseInt(paramMap.get('id'));
      });
  }

}
