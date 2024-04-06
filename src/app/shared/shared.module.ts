import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { LoaderModule } from "./components/loader/loader.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule    ],

    exports: [
        LoaderModule,
    ]
})
export class SharedModule {}