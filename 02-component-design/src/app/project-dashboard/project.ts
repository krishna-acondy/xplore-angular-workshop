import { User } from './user';

export class Project {
  collaborators: User[];

  constructor(public name: string, public startDate: Date, public description: string) {}

  addCollaborators(collaborators: User[]) {
    this.collaborators = collaborators;
    return this;
  }
}
