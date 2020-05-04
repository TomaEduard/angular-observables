import { UserService } from './user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  userActivated = false;

  private activedSub: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.activedSub = this.userService.activatedEmitter.subscribe(didActivate => {
      this.userActivated = didActivate;
    })
  }
  
  ngOnDestroy() {
    this.activedSub.unsubscribe();
  }
}
