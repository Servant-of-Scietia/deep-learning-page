import { Component, ɵɵstylePropInterpolate1 } from '@angular/core';

@Component({
  selector: 'app-deep-learning-introduction',
  templateUrl: './deep-learning-introduction.component.html',
  styleUrls: ['./deep-learning-introduction.component.css']
})

export class DeepLearningIntroductionComponent{
  page_router: number = 0;
  unlocked_until_page: number = 0;
  answer_text: string = "choose an answer";
  color: string = "white";
  
  next()
  { 
    this.page_router++;
  }
  prev()
  {
    this.page_router--;
  }
  answer(n: number)
  {
    const p1a1p = document.getElementById("p1a1p");
    const p1a2p = document.getElementById("p1a2p");
    const p1a3p = document.getElementById("p1a3p");
    const p1a4p = document.getElementById("p1a4p");
    const p1d1p = document.getElementById("p1d1p");
    const p1d1div = document.getElementById("p1d1div");

    if(p1a1p)
    {
      p1a1p.style.backgroundColor = "transparent";
      p1a1p.style.color = "white";
    }
    if(p1a2p)
    {
      p1a2p.style.backgroundColor = "transparent";
      p1a2p.style.color = "white";
    }
    if(p1a3p)
    {
      p1a3p.style.backgroundColor = "transparent";
      p1a3p.style.color = "white";
    }
    if(p1a4p)
    {
      p1a4p.style.backgroundColor = "transparent";
      p1a4p.style.color = "white";
    }
    
    switch(n)
    {
      case 1:
        
        if(p1a1p)
        {
          p1a1p.style.backgroundColor = "white";
          p1a1p.style.color = "black";
        }
        break;
      case 2:
        if(p1a2p)
        {
          p1a2p.style.backgroundColor = "white";
          p1a2p.style.color = "black";
        }
        break;
      case 3:
        if(p1a3p)
        {
          p1a3p.style.backgroundColor = "white";
          p1a3p.style.color = "black";
        }
        break;
      case 4:
        if(p1a4p)
        {
          p1a4p.style.backgroundColor = "white";
          p1a4p.style.color = "black";
        }
        break;
    }
    if(n!=2)
    {
      this.answer_text = "wrong";
      if(p1d1p && p1d1div)
      {
        const color = "red";
        p1d1p.style.color = color;
        p1d1p.style.borderColor = color;
        p1d1p.style.width = "3vw"
        p1d1div.style.backgroundColor = color;
      }
    }
    else 
    {
      this.answer_text = "correct";
      if(p1d1p && p1d1div)
      {
        const color = "green";
        p1d1p.style.color = color;
        p1d1p.style.borderColor = color;
        p1d1p.style.width = "3.5vw"
        p1d1div.style.backgroundColor = color;
      }
      if(this.unlocked_until_page == 0)
      {
        this.unlocked_until_page = 1;
      }
    }
  }

}
