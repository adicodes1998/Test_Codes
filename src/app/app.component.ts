import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name =
  '[@#@METATAG_DYNATABLE_1@#@,  NAME, TITLE, LAW_SCHOOL_GRADUATION_YEAR, RATE_(SPECIFY_CURRENCY_TYPE)]';
  help = "[@#@metatag Dynatable 1@#@,  Name, Title, Law School Graduation Year, Rate (specify Currency Type)]"
ngOnInit() {
  this.checkSome();
}

checkSome() {
 //Check for table row
  let len = this.name.length;
  console.log(this.name.charAt(0));
  console.log(this.name.charAt(len - 1));
  ////Get 1 st Meta tag
  let arr = this.name.split(',');
  let mystring = arr[0].replace('[','').replace(/@#@/g, '');
  console.log(mystring);
  //Construct flexfield name 
  arr.shift();
  let flexFieldName = "["+arr.toString();
  console.log(flexFieldName);
  ////help and label
  let arr2 = this.help.split(',');
  arr2.shift();
  let helpAndLabel = "["+arr2.toString();
  console.log(helpAndLabel);


}
}
