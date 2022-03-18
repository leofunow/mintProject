import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ipp',
  templateUrl: './ipp.component.html',
  styleUrls: ['./ipp.component.css']
})
export class IppComponent implements OnInit {

  test = [1,2,3,4,5];
  constructor() { }

  ngOnInit(): void {
  }

}
