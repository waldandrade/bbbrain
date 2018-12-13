import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkspaceComponent } from './bbbrain/workspace/workspace.component';
import { BrainComponent } from './bbbrain/brain/brain.component';

const routes: Routes = [
  { path: 'brain/:id', component: BrainComponent },
  {
    path: 'workspace',
    component: WorkspaceComponent,
    data: { title: 'Workspace' }
  },
  { path: '',
    redirectTo: '/workspace',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
