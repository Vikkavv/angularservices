import { Injectable } from "@angular/core";
import { Comic } from "../models/Comic";

@Injectable()
export class ComicsService{

    async getComics(): Promise<Array<Comic>>{
        let comics: Array<Comic> = [];
        let response = await fetch("assets/comics.json");
        let data = await response.json();
        for (const comicJson of data) {
            comics.push(new Comic(comicJson.nombre, comicJson.imagen, comicJson.descripcion))
        }
        return comics;
    }

}