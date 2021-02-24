import { Component } from '@angular/core';
import { ContentData1, ContentData2 } from './card-data/library-data';
import { PillsList } from './card-data/pills-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ccd-cards';
  sectionGroup = ContentData1;
  contentData2 = ContentData2;
  displaySections = PillsList



}
