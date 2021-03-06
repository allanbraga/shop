import {Component, OnInit} from '@angular/core';
import {DataStorageService} from "../../shared/data-storage.service";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorageService:DataStorageService , public authService:AuthService) { }

  ngOnInit() {

  }

  onSave(){
    this.dataStorageService.storeRecipes().subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  onFetch(){
    this.dataStorageService.fetchRecipes();
  }

  onLogOut(){
    this.authService.logOut();
  }

}
