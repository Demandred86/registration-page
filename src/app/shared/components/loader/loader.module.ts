import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TranslateModule } from "@ngx-translate/core";
import { LoaderComponent } from "./loader.component";
import { LoaderService } from "./services/loader.service";

@NgModule({
    declarations: [
        LoaderComponent
    ],
    providers: [
        LoaderService
    ],
    imports: [
        CommonModule,
        NgbModule,
        TranslateModule.forChild()
    ],
    exports: [
        LoaderComponent
    ]
})
export class LoaderModule {

}