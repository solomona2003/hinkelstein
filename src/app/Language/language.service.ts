import { Injectable } from '@angular/core';
import { LeftsliderService } from './../leftslider/leftslider.service';
import * as  ComponentTexts from '../Language/language.model';

@Injectable()
export class LanguageService {

    currentLanguage: string;
    constructor(private leftsliderService: LeftsliderService) { }


    public getComponentText(component: string): any {
        return ComponentTexts[component];
    }
}
