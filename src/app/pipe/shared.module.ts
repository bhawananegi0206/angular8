import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CursorPipe } from './cursor/cursor.pipe';
import { FilterPipe } from './filter/filter.pipe';
import { SearchPipe } from './search/search.pipe';
import { SortPipe} from './sort/sort.pipe';
import {Components} from '../shared/components';
import { from } from 'rxjs';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    CursorPipe,
    FilterPipe,
    SearchPipe,
    SortPipe
  ],
  exports:[CursorPipe,FilterPipe,SearchPipe,SortPipe]
})
export class SharedModule { }
