import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { SynonymsComponent } from './synonyms/synonyms.component';

const routes: Routes = [
  { path: '', redirectTo: '/translate', pathMatch: 'full' },
  { path: 'translate', component: DictionaryComponent },
  { path: 'synonyms', component: SynonymsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
