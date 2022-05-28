import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { CenteredLayoutComponent } from './centered-layout/centered-layout.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MenuComponent, CenteredLayoutComponent],
  exports: [
    MenuComponent,
    CenteredLayoutComponent
  ]
})
export class UiModule {}
