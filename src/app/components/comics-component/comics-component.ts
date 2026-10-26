import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ComicsService } from '../../services/comics.service';
import { Comic } from '../../models/Comic';

@Component({
  selector: 'app-comics-component',
  standalone: false,
  styleUrl: './comics-component.css',
  templateUrl: './comics-component.html',
})
export class ComicsComponent implements OnInit{

  public comics!: Array<Comic>; 

  constructor(private _comicsService: ComicsService, private _detector: ChangeDetectorRef) {}

  async getComics(): Promise<any> {
    this.comics = await this._comicsService.getComics();
    this._detector.detectChanges();
  }

  async ngOnInit(): Promise<void> {
    //this.getComics();
    this.comics = await this._comicsService.getComics();
    this._detector.detectChanges();
  }
  
}
