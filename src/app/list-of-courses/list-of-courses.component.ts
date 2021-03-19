import { Component, OnInit, Input } from '@angular/core';

// Model
import { TraineesModel } from '../../models/trainees.model';

@Component({
  selector: 'app-list-of-courses',
  templateUrl: './list-of-courses.component.html',
  styleUrls: ['./list-of-courses.component.css'],
})
export class ListOfCoursesComponent implements OnInit {
  @Input() trainees: TraineesModel[] = [];

  constructor() {}

  ngOnInit(): void {}
}
