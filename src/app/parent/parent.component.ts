import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  providers: [CommonService]
})
export class ParentComponent implements OnInit {

  constructor(public cmService: CommonService) { }

  ngOnInit(): void {
  }

}
