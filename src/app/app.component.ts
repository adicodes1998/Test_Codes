import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name =
    '[@#@METATAG_DYNATABLE_1@#@,  NAME, TITLE, LAW_SCHOOL_GRADUATION_YEAR, RATE_(SPECIFY_CURRENCY_TYPE)]';
  help =
    '[@#@metatag Dynatable 1@#@,  Name, Title, Law School Graduation Year, Rate (specify Currency Type)]';

  test = 'http://localhost:4201/#/create-contract/New';
  test1 = 'http://localhost:4201/#/create-contract/New?firmid=1115&dataid=190';
  capAmountReplacement =
    'There is an overall billing cap on this matter of {{CAP_AMOUNT}} | null';

  templateMetaData = {
    flexFieldLabel:
      '[  Name, Title, Law School Graduation Year, Rate (specify Currency Type)]',
    flexFieldName:
      '[  NAME, TITLE, LAW_SCHOOL_GRADUATION_YEAR, RATE_(SPECIFY_CURRENCY_TYPE)]',
    flexFieldUICompType: 'TableRow',
  };

  ngOnInit() {
    this.capAmountReplacementLogic();
    console.log(this.test.includes('?firmid'));
    console.log(this.test1.includes('?firmid'));
    this.contractgenDynaExtract();
    this.panelfirmDynaExtract();
  }

  capAmountReplacementLogic() {
    let temp = this.capAmountReplacement.split('|')[0];
    console.log(temp);
  }

  panelfirmDynaExtract() {
    console.log('panelfirmDynaExtract START');
    let tkarr = [];
    console.log();
    //Table headers Extraction
    let tableHeaders = this.templateMetaData.flexFieldLabel
      .slice(1, -1)
      .split(',');
    console.log(tableHeaders);
    ///Creation of tempJson
    let flexFieldNames = this.templateMetaData.flexFieldName
      .slice(1, -1)
      .split(',');
    console.log(flexFieldNames);
    for (let i = 0; i < tableHeaders.length; i++) {
      console.log(flexFieldNames[i]);
      let tempObj = {
        flexFieldName: flexFieldNames[i],
        flexFieldLabel: tableHeaders[i],
      };
      console.log('Hello', tempObj);
      tkarr.push(tempObj);
    }

    console.log(tkarr);
    console.log('panelfirmDynaExtract END');
  }

  contractgenDynaExtract() {
    console.log('contractgenDynaExtract START');
    //Check for table row
    let len = this.name.length;
    console.log(this.name.charAt(0));
    console.log(this.name.charAt(len - 1));
    ////Get 1 st Meta tag
    let arr = this.name.split(',');
    let mystring = arr[0].replace('[', '').replace(/@#@/g, '');
    console.log(mystring);
    //Construct flexfield name
    arr.shift();
    let flexFieldName = '[' + arr.toString();
    console.log(flexFieldName);
    ////help and label
    let arr2 = this.help.split(',');
    arr2.shift();
    let helpAndLabel = '[' + arr2.toString();
    console.log(helpAndLabel);
    console.log('contractgenDynaExtract END');
  }
}
