import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

managerAlloction =300;
DeveloperAllocation= 1000;
QaAllocation= 500;
totalExpense =0;
isSubmitted= false;

  constructor() { }

  ngOnInit() {
  }

  //calculate expense
  onCalculate(formdetails: NgForm){
    console.log(formdetails);
    this.totalExpense = formdetails.value.managers*this.managerAlloction +
    formdetails.value.developers*this.DeveloperAllocation + formdetails.value.testers*this.QaAllocation;
    console.log('total expense '+this.totalExpense);
    this.isSubmitted= true;
  }

  checkValue(event:any) {
    if (event.target.value < 0) {
      event.target.value = 0;
    }
    console.log(event.target.value)
  }
}
