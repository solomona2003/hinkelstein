import { NgModule } from '@angular/core';
import {MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule, MatSidenavModule } from '@angular/material';
@NgModule({
    imports: [MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule, MatSidenavModule],
    exports: [MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule, MatSidenavModule]
})

export class MaterailModule {}
