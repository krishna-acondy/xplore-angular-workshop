import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './project';
import { User } from './user';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.scss']
})
export class ProjectDashboardComponent {

  projects$: Observable<Project[]>;
  staff$: Observable<User[]>;

  constructor(projectService: ProjectService) {
    this.projects$ = projectService.listProjects();
    this.staff$ = projectService.listStaff();
  }

  onProjectClick(projectName: string) {
    console.log(projectName);
  }

}
