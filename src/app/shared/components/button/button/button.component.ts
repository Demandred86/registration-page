import { Component, Input, OnInit } from "@angular/core";

export interface ButtonInterface {
    classes?: string;
    disabled?: boolean;
    type?: string;
}

@Component({
    selector: "app-button",
    templateUrl: "./button.component.html",
    styleUrls: ["./button.component.scss"]
})
export class ButtonComponent implements OnInit, ButtonInterface {

    @Input() classes = "";
    @Input() disabled = false;
    @Input() type = "button";
    @Input() showArrow = false;

    public classesArray: string[] = [];

    ngOnInit(): void {
        if (this.classes.length > 0) this.classesArray = this.classes.split(" ");
        this.classesArray.push("btn");
    }

}
