import { ChangeDetectorRef, Component, DoCheck, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PlantillaService } from '../../services/plantilla.service';
import { Empleado } from '../../models/Empleado';

@Component({
  selector: 'app-plantilla-funcion-simple-component',
  standalone: false,
  styleUrl: './plantilla-funcion-simple-component.css',
  templateUrl: './plantilla-funcion-simple-component.html',
})
export class PlantillaFuncionSimpleComponent implements OnInit {

  public funciones!: string[];
  public plantilla: Empleado[] = [];

  @ViewChild("funcionSelect") select: ElementRef

  constructor(private _plantillaService: PlantillaService, private _detector: ChangeDetectorRef) {
    this.select = new ElementRef("");
  }

  async getFunciones(): Promise<void>{
    this.funciones = await this._plantillaService.getPlantillaFunciones();
    this._detector.detectChanges();
  }

  async getPlantillaByFuncion(funcion: string): Promise<void> {
    this._plantillaService.getPlantillaByFuncion(funcion).then((plantilla) => {
      this.plantilla = plantilla; 
      this._detector.detectChanges();
    });
  }

  recibirDatos(){
    this.getPlantillaByFuncion(this.select.nativeElement.value);
    this._detector.detectChanges();
  }

  ngOnInit(): void {
    this.getFunciones();
  }

}
