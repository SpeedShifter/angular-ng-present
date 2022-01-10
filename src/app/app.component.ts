import {ChangeDetectionStrategy, Component} from '@angular/core';
import {rxjsWayPaths} from "./rxjs-way/rxjs-way-paths";
import {ngrxWayPaths} from "./ngrx-way/ngrx-way-paths";
import {promisesWayPaths} from "./promises-way/promises-way-paths";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  rxjsPath = rxjsWayPaths.main;
  ngrxPath = ngrxWayPaths.main;
  promisesPath = promisesWayPaths.main;
}
