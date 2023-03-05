import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SamplesComponent } from "./samples/samples.component";
import { CourseComponent } from "./course/course.component";
import { MeComponent } from "./me/me.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "samples",
    component: SamplesComponent,
  },
  {
    path: "me",
    component: MeComponent,
  },
  {
    path: "courses/:id",
    component: CourseComponent,
  },
  {
    path: "**",
    redirectTo: "/",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
