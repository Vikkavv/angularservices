import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { environment } from "../../environments/environment.development";
import { Empleado } from "../models/Empleado";

@Injectable()
export class PlantillaService {
    constructor(private _http: HttpClient) {}

    async getPlantillaFunciones(): Promise<Array<string>> {
        return await firstValueFrom(this._http.get<string[]>(environment.urlApiPlantilla + "/Plantilla/Funciones"));
    }

    async getPlantillaByFuncion(funcion: string): Promise<Empleado[]>{
        return await firstValueFrom(this._http.get<Empleado[]>(environment.urlApiPlantilla + "/plantilla/plantillafuncion/" + funcion));
    }

    async getPlantillaByFunciones(funciones: string[]): Promise<Empleado[]>{
        let request: string = ""
        for (const funcion of funciones) {
            request += "funcion=" + funcion + "&"
        }
        request = request.slice(0,-1);
        return await firstValueFrom(this._http.get<Empleado[]>(environment.urlApiPlantilla + "/plantilla/plantillafunciones?" + request));
    }

}