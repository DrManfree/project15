import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CardFormComponent } from './shared/ui/card-form/card-form.component';
import { CardItemComponent } from './shared/ui/card-item/card-item.component';
import { TypeItemComponent } from './shared/ui/type-item/type-item.component';
import { TypeFormComponent } from './shared/ui/type-form/type-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CardFormComponent,
    CardItemComponent,
    TypeItemComponent,
    TypeFormComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
