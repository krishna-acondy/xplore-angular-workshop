import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Project } from './project';
import { User } from './user';

const tissueMarkDevs = [
  new User('Krishna', 'Acondy', 'krishna.acondy@philips.com'),
  new User('Herman', 'Chan', 'herman.chan@philips.com')
];

const xploreDevs = [
  new User('Ryan', 'Leonard', 'ryan.leonard@philips.com'),
  new User('Jason', 'Mitchell', 'jason.mitchell@philips.com')
];

const projects = [
  new Project('TissueMark', new Date(2017, 6, 1), 'Macrodissection Workflow')
    .addCollaborators(tissueMarkDevs),
  new Project('Xplore', new Date(2018, 1, 1), 'Content Management')
    .addCollaborators(xploreDevs),
  new Project('Tutor', new Date(2012, 1, 10), 'Education')
];

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  listProjects(): Observable<Project[]> {
    return of(projects);
  }

  listStaff(): Observable<User[]> {
    return of([...tissueMarkDevs, ...xploreDevs]);
  }
}
