import { Component , OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDLed1eTrvuRR6PqGQ8c7lYAQCO0Ingk2I",
      authDomain: "ng-recipe-book-1584a.firebaseapp.com"
    });

  }

  title = 'app works!';
}
