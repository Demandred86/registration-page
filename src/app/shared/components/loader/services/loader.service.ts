import { Inject, Injectable, OnDestroy, PLATFORM_ID } from "@angular/core";
import { fromEvent, Subscription } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class LoaderService implements OnDestroy {
    private preventKeyboardOnLoading: Subscription | null = null;
    private loadingCounter = 0;

    // eslint-disable-next-line @typescript-eslint/ban-types
    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
        this.preventKeyboardOnLoading = fromEvent(document, "keydown").subscribe((event) => {
            if(this.loading) event.preventDefault();
        });
    }

    public start(): void {
        this.loadingCounter++;
    }

    public stop(): void {
        this.loadingCounter = Math.max(this.loadingCounter - 1, 0);
    }

    public get loading(): boolean {
        return this.loadingCounter > 0;
    }

    ngOnDestroy(): void {
        if(!this.preventKeyboardOnLoading?.closed)
            this.preventKeyboardOnLoading?.unsubscribe();
    }
}