import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, finalize } from "rxjs";
import { LoaderService } from "../../components/loader/services/loader.service";

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
    constructor(
        private loader: LoaderService
    ) { }

    intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        this.loader.start();

        return next.handle(req).pipe(
            finalize(() => {
                this.loader.stop();
            })
        );
    }

}