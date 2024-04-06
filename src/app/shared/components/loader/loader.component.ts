import { Component } from "@angular/core";
import { LoaderService } from "./services/loader.service";

@Component({
    selector: "app-loader",
    templateUrl: "./loader.component.html",
    styleUrls: [
        "./loader.scss"
    ]
})
export class LoaderComponent {

    constructor(private loaderService: LoaderService) {

    }

    public get loading(): boolean {
        return this.loaderService.loading;
    }
}
