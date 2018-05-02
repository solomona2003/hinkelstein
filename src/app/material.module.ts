import { NgModule } from '@angular/core';
import {MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule, MatSidenavModule, MatListModule } from '@angular/material';
@NgModule({
    imports: [MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule, MatSidenavModule, MatListModule],
    exports: [MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule, MatSidenavModule, MatListModule]
})

export class MaterailModule {}
