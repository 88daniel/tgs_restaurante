import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [TabsComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [TabsComponent]
})
export class ComponentsModule { }
