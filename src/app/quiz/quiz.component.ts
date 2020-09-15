import { Component, OnInit } from '@angular/core';
import {Ques} from "../Shared/Question";
import {Quiz_Questions} from "../Shared/Questions";

let i =0;


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {


  Cards: Ques[] = Quiz_Questions;
  Card = this.Cards[0];
  len = this.Cards.length;
  p: string = "Please select an option.";
  ans: string;

  timeLeft: number = 10;
  interval;
  int;


  constructor() {
  }


  ngOnInit(): void {
    // this.setinterval()


  }


  setInt(){
    this.int = setInterval(() => {

      if (document.getElementById("a").style.visibility != 'visible' &&
        document.getElementById("b").style.visibility != 'visible' &&
        document.getElementById("c").style.visibility != 'visible' &&
        document.getElementById("d").style.visibility != 'visible') {
        document.getElementById("a").style.visibility = 'visible';
        document.getElementById("b").style.visibility = 'hidden';
        document.getElementById("start").style.visibility = 'hidden';
        this.timeLeft=10;
        this.startTimer();
      } else if (document.getElementById("a").style.visibility == 'visible') {
        document.getElementById("b").style.visibility = 'visible';
        document.getElementById("a").style.visibility = 'hidden';
        this.pauseTimer();this.timeLeft=10;this.startTimer();
      } else if (document.getElementById("b").style.visibility == 'visible') {
        document.getElementById("c").style.visibility = 'visible';
        document.getElementById("b").style.visibility = 'hidden';
        this.pauseTimer();this.timeLeft=10;this.startTimer();
      } else if (document.getElementById("c").style.visibility == 'visible') {
        document.getElementById("d").style.visibility = 'visible';
        document.getElementById("c").style.visibility = 'hidden';
        this.pauseTimer();this.timeLeft=10;this.startTimer();
      } else if (document.getElementById("d").style.visibility == 'visible') {
        document.getElementById("end").style.visibility = 'visible';
        document.getElementById("d").style.visibility = 'hidden';
        this.pauseTimer();this.timeLeft=10;this.startTimer();
      }
      i++;
      if (i == 5) {
        clearInterval(this.int);
      }

    },10000)
  }

  onClick(val) {
    let a = val;
    // let ans:string;
    if (document.getElementById("a").style.visibility == 'visible') {
      this.ans = 'a';
    } else if (document.getElementById("b").style.visibility == 'visible') {
      this.ans = 'b';
    } else if (document.getElementById("c").style.visibility == 'visible') {
      this.ans = 'c';
    } else if (document.getElementById("d").style.visibility == 'visible') {
      this.ans = 'd';
    } else {
      this.ans = 'null'
    }

    if (a === this.ans) {
      this.p = "You Selected option " + a + " which is the correct Answer"
    } else {
      this.p = "You Selected option " + a + " which is the incorrect Answer"
    }
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    }, 1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
}
