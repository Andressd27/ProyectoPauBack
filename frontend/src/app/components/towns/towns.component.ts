import { Component, OnInit } from '@angular/core';
import { Town } from '../../models/town.model';
import { TownsService } from '../../services/towns.service';

@Component({
  selector: 'app-towns',
  templateUrl: './towns.component.html',
  styleUrls: ['./towns.component.scss'],
})
export class TownsComponent implements OnInit {
  towns: Town[] = [];
  loading = true;

  constructor(private townsService: TownsService) {}

  ngOnInit(): void {
    this.townsService.getAll().subscribe({
      next: (data) => {
        this.towns = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }
}
