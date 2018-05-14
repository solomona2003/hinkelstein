import { NgModule } from '@angular/core';
import {
    MatButtonModule, MatIconModule, MatMenuModule,
    MatToolbarModule, MatSidenavModule, MatListModule,
     MatCardModule, MatDialogModule, MatStepperModule,
      MatFormFieldModule, MatInputModule,
       MatCheckboxModule, MatChipsModule, MatSelectModule, MatTableModule, 
} from '@angular/material';
@NgModule({
    imports: [MatButtonModule, MatIconModule, MatMenuModule,
                MatToolbarModule, MatSidenavModule, MatListModule, MatCardModule,
                MatDialogModule, MatStepperModule, MatFormFieldModule,
                 MatInputModule, MatCheckboxModule, MatChipsModule,
                  MatSelectModule, MatTableModule ],

    exports: [MatButtonModule, MatIconModule, MatMenuModule,
                MatToolbarModule, MatSidenavModule, MatListModule, MatCardModule,
                MatDialogModule, MatStepperModule, MatFormFieldModule,
                 MatInputModule, MatCheckboxModule, MatChipsModule, MatSelectModule, MatTableModule ]
})

export class MaterailModule { }
