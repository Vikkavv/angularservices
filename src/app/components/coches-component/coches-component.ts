import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Coche } from '../../models/Coche';
import { CochesService } from '../../services/coches.service';

@Component({
  selector: 'app-coches-component',
  standalone: false,
  styleUrl: './coches-component.css',
  templateUrl: './coches-component.html',
})
export class CochesComponent implements OnInit{

  public coches!: Coche[];

  constructor(private _cochesService: CochesService, private _detector: ChangeDetectorRef) {}

  async ngOnInit(): Promise<void> {
      this.coches = await this._cochesService.getCoches();
      this._detector.detectChanges();
  }

}
