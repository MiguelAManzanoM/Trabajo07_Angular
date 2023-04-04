import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Trabajo07_Angular';

  calValue: number = 0;
  funcT: any = 'Sin función';

  calNumber: string = 'Sin valor';

  firstNumber: number = 0;
  secondNumber: number = 0;

  onClickValue (val: string, type: any) {
    if(type == 'number') {
      this.onNumberClick(val);
    }
    else if(type == 'function') {
      this.onFunctionClick(val);
    }
  }

  onNumberClick(val: string){
    if(this.calNumber != 'Sin valor'){
      this.calNumber = this.calNumber + val;
    }
    else {
      this.calNumber = val;
    }

    this.calValue = parseFloat(this.calNumber);
  }

  onFunctionClick(val: string){
    if(val == 'c'){
      this.clearAll();
    }

    else if(this.funcT == 'Sin función'){
      this.firstNumber = this.calValue;
      this.calValue = 0;
      this.calNumber = 'Sin valor';
      this.funcT = val;
    }
    else if(this.funcT != 'Sin función'){
      this.secondNumber = this.calValue;
      this.valueCalculate(val);
    }
  }

  valueCalculate(val: string){
    if(this.funcT == '+'){
      const Total = this.firstNumber + this.secondNumber;
      this.totalAssignValues(Total, val);
    }
    else if(this.funcT == '-'){
      const Total = this.firstNumber - this.secondNumber;
      this.totalAssignValues(Total, val);
    }
    else if(this.funcT == '*'){
      const Total = this.firstNumber * this.secondNumber;
      this.totalAssignValues(Total, val);
    }
    else if(this.funcT == '/'){
      const Total = this.firstNumber / this.secondNumber;
      this.totalAssignValues(Total, val);
    }
    else if(this.funcT == '%'){
      const Total = this.firstNumber % this.secondNumber;
      this.totalAssignValues(Total, val);
    }
  }

  totalAssignValues(Total: number, val: string){
    this.calValue = Total;
    this.firstNumber = Total;
    this.secondNumber = 0;
    this.calNumber = 'Sin valor';
    this.funcT = val;
    if(val == '='){
      this.onEqualPress()
    }
  }

  onEqualPress(){
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.funcT = 'Sin función';
    this.calNumber = 'Sin valor';
  }

  clearAll(){
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.calValue = 0;
    this.funcT = 'Sin función';
    this.calNumber = 'Sin valor';
  }
}
