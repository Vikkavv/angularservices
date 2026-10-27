import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom, Observable } from "rxjs";
import { Persona } from "../models/Persona";
import { environment } from "../../environments/environment.development";

@Injectable()
export class PersonasService {
    constructor(private _http: HttpClient){}

    getPersonas(): Observable<any> {
        return this._http.get(environment.urlApiPersonas);
    }

    getPersonasPromise(): Promise<any> {
        return new Promise((resolve) => {
            this._http.get(environment.urlApiPersonas).subscribe((response) => {
                resolve(response);
            })
        })
    }

    async getPersonasAsync(): Promise<Array<Persona>>{
        let personas: Persona[] = [];
        try{
            personas = await firstValueFrom(this._http.get<Array<Persona>>(environment.urlApiPersonas));
        }
        catch(e: any){
            console.log(e.message);
        }
        return personas;
    }
}