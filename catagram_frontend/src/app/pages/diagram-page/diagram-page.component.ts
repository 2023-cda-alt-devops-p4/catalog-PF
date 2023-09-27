import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Diagram } from "../../models/diagram";
import { DataModel } from "../../models/data-model";
import { DiagramsService } from "../../services/diagrams.service";
import { Subscription } from "rxjs";
import { ModalService } from "../../services/modal.service";
import {ActivatedRoute} from "@angular/router";
import {AccordionService} from "../../services/accordion.service";

@Component({
  selector: 'app-diagram-page',
  templateUrl: './diagram-page.component.html',
  styleUrls: ['./diagram-page.component.css']
})
export class DiagramPageComponent implements OnInit, OnDestroy {
  dataModelTypes: string[] = [];
  dataModelType: string | null = null;
  dataModels: DataModel[] = [];
  diagramsByType: { [type: string]: Diagram[] } = {};
  showModal: boolean = false;
  activeDiagram: Diagram | null = null;

  private subscription: Subscription = new Subscription();

  constructor(
      private diagramsService: DiagramsService,
      private modalService: ModalService,
      private route: ActivatedRoute,
      private accordionService: AccordionService

  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.dataModelType = data['modelType'];

      this.diagramsService.getDataModelTypes().subscribe(types => {
        this.dataModelTypes = types;
      });


      this.modalService.showModal$.subscribe(isOpen => {
        this.showModal = isOpen;
      });

      this.modalService.activeDiagram$.subscribe(diagram => {
        this.activeDiagram = diagram;
      });

      this.diagramsService.fetchDataModel().subscribe(dataModel => {
        const currentModel = dataModel.find(dm => dm.dataModel === this.dataModelType);
        if (currentModel) {
          this.diagramsByType = this.accordionService.groupDiagramsByType(currentModel.diagrams);
        }
      });



    });
  }

  openModal(diagram: any) {
    this.activeDiagram = diagram;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  getTitle(modelType: 'uml' | 'merise' | null | string): string {
    return modelType === 'uml' ? 'Diagrammes UML' : 'Modèles MERISE';
  }

  get diagramsForCurrentType(): Diagram[] {
    return this.diagramsByType[this.dataModelType || ''] || [];
  }

  getDiagramTypes(): string[] {
    return Object.keys(this.diagramsByType);
  }


  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
