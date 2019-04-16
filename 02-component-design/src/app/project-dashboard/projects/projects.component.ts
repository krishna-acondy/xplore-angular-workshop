import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  @Input()
  projects: Project[] = [];

  @Output()
  projectClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onClick(project: Project) {
    this.projectClick.emit(project.name);
  }

}
