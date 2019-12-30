import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestApiService } from '../service/rest-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit, OnDestroy {
  name: string;
  tododata = [];
  lastUpdate: Promise<unknown>;
  private dataSubscription: Subscription;

  constructor(private route: ActivatedRoute, private restApi: RestApiService) { }

  ngOnInit() {
    //console.log(this.titre);
    //console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name'];

    const myObservable = this.restApi.getData();
    this.dataSubscription = myObservable.subscribe(
      (data) => {
        this.tododata = Array.from(Object.keys(data), k => data[k]);
        //console.log(this.persondata);
      },
      (error) => {
        console.log('Uh-oh, an error occurred! : ' + error);
      },
      () => {
        console.log('Observable complete!');
      }
    );

    this.lastUpdate = new Promise((resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    });
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }

}
