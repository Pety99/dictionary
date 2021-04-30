import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material-module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsComponent } from './tabs/tabs.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { SynonymsComponent } from './synonyms/synonyms.component';
import { SelectComponent } from './select/select.component';
import { LogoComponent } from './logo/logo.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { DictionaryService } from './services/dictionary.service';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    DictionaryComponent,
    SynonymsComponent,
    SelectComponent,
    LogoComponent,
    InputComponent,
    OutputComponent,
    LanguageSelectorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [DictionaryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
