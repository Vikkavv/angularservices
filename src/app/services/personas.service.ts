import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class PersonasService {
    constructor(private _http: HttpClient){}

    getPersonas(): Observable<any> {
        return this._http.get("https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas");
    }
}