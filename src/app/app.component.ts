import { Component, OnInit } from '@angular/core';
import { ContentData1, ContentData2 } from './card-data/library-data';
import { PillsList } from './card-data/pills-data';
import { BtnRendererComponent } from './renderer/btn-renderer-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ccd-cards';
  sectionGroup = ContentData1;
  contentData2 = ContentData2;
  displaySections = PillsList

  columnDefs = [
    {headerName: 'Make', field: 'make', sortable: true},
    {headerName: 'Model', field: 'model'},
    {headerName: 'Price', field: 'price'},
    {
      headerName: 'Goal', field: 'goal',
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
      onClick: this.onBtnClick.bind(this),
      label: 'Click'
    }}
  ];
  frameworkComponents: any;

  rowData = [];

  abc = [
    {make: 'Toyota', model: 'Celica', price: 35000},
    {make: 'Ford', model: 'Mondeo', price: 32000},
    {make: 'Porsche', model: 'Boxter', price: 72000}
  ];

  ngOnInit() {
    this.abc.forEach(e => {
      this.rowData.push({
        make: e.make,
        model: e.model,
        price: e.price
      })
    })
    this.frameworkComponents = {
      buttonRenderer: BtnRendererComponent,
    }
  }

  onBtnClick() {
    
  }


  onItemSelect(event) {
    console.log(event);
  }
}
