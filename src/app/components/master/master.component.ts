import { Component, OnInit } from '@angular/core';
import{Dublinbikes} from 'src/app/models/dublinbikes';
import {DublinbikesService} from "src/app/services/dublinbikes.service"
@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
bikes: Dublinbikes[] = [];
  constructor( private bikeService: DublinbikesService) { }
  ngOnInit(): void {
    this.getBikesListing();
  }

getBikesListing() {
  this.bikeService.getListOfBikes().subscribe(bikes => this.bikes = bikes);
}
}