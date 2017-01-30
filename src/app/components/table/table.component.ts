import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { Price } from '../../classes/price';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {
  @Input() headers: Object;
  @Input() data: Object[];
  @Output() selection = new EventEmitter();

  dataFields: String[];

  searchString: String = '';
  sortField: String;
  ascending = true;

  selected: Object;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['headers'] || changes['data']) {
      this.dataFields = Object.keys(this.headers);
      this.sortField = this.dataFields[0];
    }
  }

  private shouldRightAlign(item: any) {
    return typeof item === 'number' || item instanceof Price;
  }

  private setSort(field: String) {
    if (this.sortField === field) {
      this.ascending = !this.ascending;
    } else {
      this.ascending = true;
    }

    this.sortField = field;
  }

  private selectItem(item: Object) {
    this.selected = item;
    this.selection.emit(this.selected);
  }
}
