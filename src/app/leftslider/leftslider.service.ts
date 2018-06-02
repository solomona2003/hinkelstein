import { Subject } from 'rxjs';


export class LeftsliderService {
    themeStateLight = new Subject<boolean>();
    themeStateDark = new Subject<boolean>();
    themeStateMiddle = new Subject<boolean>();

}
