import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  result:number = 42;

  firstPart:string="";

  constructor() { }

  ngOnInit() {
  }


  onEqualClick(){
    console.log("suma to : ");
    
  }


  onCombineFormula(value: string){
    console.log("clicked number: " + value);
  }


  onZero(){
    console.log("Zero ");
  }
  onOne(){
    console.log("One ");
    this.result += 1;
  }
  onTwo(){
    console.log("Two ");
    this.firstPart=this.firstPart+'2';
  }
  onThree(){
    console.log("Three ");
  }
  onFour(){
    console.log("Four ");
  }
  onFive(){
    console.log("Five ");
  }
  onSix(){
    console.log("Six ");
  }
  onSeven(){
    console.log("Seven ");
  }
  
  onEight(){
    console.log("Eight ");
  }
  onNine(){
    console.log("Nine ");
  }

  onPlus(){console.log("+");}
  onMinus(){console.log("-");}
  onDivide(){console.log("/");}
  onMultiply(){console.log("*");}

  onFtoC(){console.log("FtoC: ");}
  onCtoF(){console.log("CtoF: ");}
}
