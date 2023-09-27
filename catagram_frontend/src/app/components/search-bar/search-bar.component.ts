import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent {
  @Output() searchEvent = new EventEmitter<string>();

  search(query: string) {
    this.searchEvent.emit(query);
  }
}
