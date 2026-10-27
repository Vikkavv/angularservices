import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PersonasService } from '../../services/personas.service';
import { Persona } from '../../models/Persona';

@Component({
  selector: 'app-personas-api-component',
  standalone: false,
  styleUrl: './personas-api-component.css',
  templateUrl: './personas-api-component.html',
})
export class PersonasApiComponent implements OnInit {

  public personas!: Array<Persona>;

  constructor(private _detector: ChangeDetectorRef, private _service: PersonasService) {}

  async ngOnInit(): Promise<void> {
    /*this._service.getPersonas().subscribe((personas) => {
      this.personas = personas;
      this._detector.detectChanges();
    });*/
    this._service.getPersonasPromise().then((personas) => {
      this.personas = personas;
      this._detector.detectChanges();
    })

    this.personas = await this._service.getPersonasAsync();
  }
}
