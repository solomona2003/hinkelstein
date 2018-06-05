import { Subject, BehaviorSubject } from 'rxjs';


export class LeftsliderService {
    // themes
    themeStateLight = new Subject<boolean>();
    themeStateDark = new Subject<boolean>();
    themeStateMiddle = new BehaviorSubject(true);

    // language
    currentLanguage = new BehaviorSubject('en');

    changeCurrentLanguage(language: string) {
        this.currentLanguage.next(language);
    }

}
