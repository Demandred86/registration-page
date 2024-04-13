import { registerLocaleData } from "@angular/common";
import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import localeIt from "@angular/common/locales/it";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private translate: TranslateService) {

  }

  public ngOnInit(): void {
    registerLocaleData(localeIt);
    this.translate.currentLang = this.translate.defaultLang;
  }
}
