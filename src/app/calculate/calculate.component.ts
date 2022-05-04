
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {

  managerAlloction =300;
  DeveloperAllocation= 1000;
  QaAllocation= 500;
  totalExpense =0;
employeeStructure: FormGroup;
indexvalue= 0;
developers= 0;
testers= 0;
employees: FormGroup;
employeeAdded = false;
isSubmitted = false;
managerAdded = false;

 constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.employeeStructure = this.formBuilder.group({
      managers: new FormArray([])
  });
}

get manager() { return this.employeeStructure.controls.managers as FormArray; }

//add managers
addManager(){
  this.managerAdded = true;
this.indexvalue = this.indexvalue + 1;
  this.manager.push(this.formBuilder.group({
    submanager: new FormControl('manager'+this.indexvalue)
  }));

}


//add developers and testers
addEmployees(){
 this.employeeAdded = true;

this.employees = new FormGroup({
  developers: new FormControl(0),
     tester: new FormControl(0)
});

this.employeeStructure.addControl('employees', this.employees)

}

getEmployee(){
return (<FormArray>this.employeeStructure.get('managers')).controls ;
}

checkValue(event:any) {
  if (event.target.value < 0) {
    event.target.value = 0;
  }
  console.log(event.target.value)
}

onCalculate(){
  this.isSubmitted = true;


  this.totalExpense = this.managerAlloction*this.indexvalue +
this.employeeStructure.get('employees.developers').value* this.DeveloperAllocation+
this.employeeStructure.get('employees.tester').value* this.QaAllocation;
console.log(this.totalExpense);
}

}
