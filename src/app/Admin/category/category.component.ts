import { Component } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AgGridAngular } from 'ag-grid-angular';
import { AllCommunityModule, ColDef, GridReadyEvent, ModuleRegistry } from 'ag-grid-community';
import { CategoryService } from '../../services/category.service';
ModuleRegistry.registerModules([AllCommunityModule]);




@Component({
  selector: 'app-category',
  imports: [NgbModule,AgGridAngular],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})



export class CategoryComponent {
  constructor(private cservice:CategoryService){}
  rowData :any
  ngOnInit(){
    this.getCategory();
  }
  
  columnDefs: ColDef[] = [
    { field: 'categoryId',flex: 1  },
    { field: 'name', flex:2 },
    { field: 'image',flex:1 }
  ];

  onGridReady(params: GridReadyEvent) {
    params.api.sizeColumnsToFit();
    
  }
  getCategory(){
this.cservice.GetCategoryAsync().subscribe({next:(data:any)=>{
  console.log(data);
  this.rowData = data;
},error:(err)=>{
console.log(err)
}})
  }
}
