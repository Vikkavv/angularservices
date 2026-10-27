import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Coche } from "../models/Coche";
import { environment } from "../../environments/environment.development";
import { firstValueFrom } from "rxjs";

@Injectable()
export class CochesService {
    constructor(private _http: HttpClient){}


    async getCoches(): Promise<Coche[]>{
        return await firstValueFrom(this._http.get<Array<Coche>>(environment.urlApiCoches + "/coches"))
    }
}