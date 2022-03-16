import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  test = [1,2,3,4,5];
  cardinform =
    [{head: 'Почему именно МИНТ?',
      body: 'Забота о себе - это забота о будущем!' +
        ' Мы - команда, которая обеспечит вам безбедную старость'},
    {head: '1', body: '2'},
    {head: '3', body: '4'}];
  cardstyle = ['z-index: 2;','z-index: 1;','z-index: 0;'];
  cardtype: number = 0;

  calc = { isMan:true,
            age:35,
            salary:20000,
            payment:2000,
            percent:6};

  publications = [{img:'assets/img/posts/post1.png',
                    head:'Первый пост компании',
                    body:'Примерное описание какой-либо новости или интересного факта о компании'},
    {img:'https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec',
      head:'Второй пост компании',
      body:'Примерное описание какой-либо новости или интересного факта о компании'},];


  isMan = true;

  constructor() { }

  ngOnInit(): void {
  }

  changecard(num: number){
    this.cardtype = num;
    this.changeCardStyle();
  }

  lowercard(){
    this.cardtype--;
    if(this.cardtype < 0)
      this.cardtype = 2;
    this.changeCardStyle();
  }
  higercard(){
    this.cardtype++;
    this.changeCardStyle();
  }

  changeCardStyle(){
    switch (this.cardtype%3) {
      case 0: this.cardstyle = ['z-index: 2','z-index: 1','z-index: 0']; break;
      case 1: this.cardstyle = ['z-index: 1','z-index: 2','z-index: 0']; break;
      case 2: this.cardstyle = ['z-index: 0','z-index: 1','z-index: 2']; break;
    }
  }
  changeIsMan(flag: boolean){
    this.calc.isMan=flag;
  }

  getCalc():number{
    return Math.round((60-this.calc.age)*0.2*this.calc.salary+this.calc.payment*(this.calc.percent)/10*(60-this.calc.age));
  }
  getAgeRange():number{
    if(this.calc.isMan)
      return 59;
    if (this.calc.age > 54)
      this.calc.age = 54;
    return 54;
  }

}
