// tslint:disable: quotemark
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatColorPickerModule } from "mat-color-picker";
import { MccColorPickerModule } from "material-community-components";
import { AppRoutingModule } from "./app-routing.module";
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatCardModule,
  MatTabsModule,
  MatSelectModule,
  MatDividerModule,
  MatStepperModule
} from "@angular/material";
// import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

// components
import { AppComponent } from "./app.component";
import { ColorPickerComponent } from "./color-picker/color-picker.component";

// MatColorpicker
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ColourPickerVersionTwoComponent } from './colour-picker-version-two/colour-picker-version-two.component';

@NgModule({
  declarations: [AppComponent, ColorPickerComponent, ColourPickerVersionTwoComponent, ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatColorPickerModule,
    MccColorPickerModule.forRoot({
      used_colors: ["#000000", "#FFF555"]
    }),
    MatSelectModule,
    /* */
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTabsModule,
    MatDividerModule,
    /* */
    MatStepperModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
export class PizzaPartyAppModule {}
export class ColorPickerModule {}
