import { BehaviorSubject } from 'rxjs';


export class StreamingService {
    webButton = new BehaviorSubject<string>('off');
    recButton = new BehaviorSubject<string>('off');
    r2rButton = new BehaviorSubject<string>('off');
    playButton = new BehaviorSubject<string>('off');
    stopButton = new BehaviorSubject<string>('off');
}
