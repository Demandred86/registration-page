import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpBackend, HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { LoaderInterceptorModule } from "./shared/interceptors/loader/loader.module";
import { SharedModule } from "./shared/shared.module";
import { FrontendModule } from "./ui/frontend/frontend.module";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "it" },
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LoaderInterceptorModule,
    SharedModule,
    FrontendModule,
    TranslateModule.forRoot({
      defaultLanguage: "it",
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpBackend) => new TranslateHttpLoader(new HttpClient(http), "./assets/i18n/"),
        deps: [
          HttpBackend
        ]
      }
    }), 
    NgbModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
