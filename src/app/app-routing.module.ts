import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkspaceComponent } from './bbbrain/workspace/workspace.component';
import { BrainComponent } from './bbbrain/brain/brain.component';
import { BbbrainComponent } from './bbbrain/bbbrain.component';
import { WebsiteComponent } from './website/website.component';

const routes: Routes = [
  {
    path: 'app',
    component: BbbrainComponent,
    children: [
      { path: 'brain/:id', component: BrainComponent },
      {
        path: 'workspace',
        component: WorkspaceComponent,
        data: { title: 'Workspace' }
      }
    ]
  },
  { path: '',
    component: WebsiteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
