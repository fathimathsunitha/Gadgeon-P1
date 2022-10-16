import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MypageComponent } from './mypage/mypage.component';
import { DemopipesComponent } from './demopipes/demopipes.component';
import { CustpipesPipe } from './custpipes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MypageComponent,
    DemopipesComponent,
    CustpipesPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
