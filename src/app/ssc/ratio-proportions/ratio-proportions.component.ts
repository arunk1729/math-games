import { UtilityService } from './../../common/services/utility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ratio-proportions',
  templateUrl: './ratio-proportions.component.html',
  styleUrls: ['./ratio-proportions.component.scss']
})
export class RatioProportionsComponent implements OnInit {

  constructor( public util: UtilityService ) { }

  ngOnInit() {
  }

}
