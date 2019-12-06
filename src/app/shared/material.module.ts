import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [MatTableModule],
  exports: [MatTableModule],
  declarations: []
})
export class MaterialModule { }
