import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PetService } from '../services/pet.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})



export class PetComponent implements OnInit {
  constructor(private route: ActivatedRoute, private location: Location, private petService: PetService, private http: HttpClient) { }

  ngOnInit() {

  }

  getPet(): void {
    const id = +this.route.snapshot.paramMap.get('id');
  }

  goBack(): void {
    this.location.back();
  }

}
