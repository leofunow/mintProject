import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {

  publications = [{img:'assets/img/posts/post1.png',
    head:'Первый пост компании',
    body:'Примерное описание какой-либо новости или интересного факта о компании'},
    {img:'https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec',
      head:'Второй пост компании',
      body:'Примерное описание какой-либо новости или интересного факта о компании'},];

  constructor() { }

  ngOnInit(): void {
  }

}
