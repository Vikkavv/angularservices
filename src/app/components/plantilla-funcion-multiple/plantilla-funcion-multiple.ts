import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Empleado } from '../../models/Empleado';
import { PlantillaService } from '../../services/plantilla.service';

@Component({
  selector: 'app-plantilla-funcion-multiple',
  standalone: false,
  styleUrl: './plantilla-funcion-multiple.css',
  templateUrl: './plantilla-funcion-multiple.html',
})
export class PlantillaFuncionMultiple implements OnInit {

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

  async getPlantillaByFunciones(funciones: string[]): Promise<void> {
    this.plantilla = await this._plantillaService.getPlantillaByFunciones(funciones);
    this._detector.detectChanges();
  }

  recibirDatos(){
    let funciones: string[] = [];
    for (const option of this.select.nativeElement.selectedOptions) {
      funciones.push(option.value);
    }
    this.getPlantillaByFunciones(funciones);
    this._detector.detectChanges();
  }

  ngOnInit(): void {
    this.getFunciones();
  }

}
