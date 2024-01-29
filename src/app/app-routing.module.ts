import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './comp/home/home.component';
import { AboutusComponent } from './comp/aboutus/aboutus.component';
import { NavbarComponent } from './comp/navbar/navbar.component';
import { HeadComponent } from './comp/head/head.component';
import { ContentComponent } from './comp/content/content.component';
import { WhyUsSectionComponent } from './comp/why-us-section/why-us-section.component';
import { SkillsComponent } from './comp/skills/skills.component';
import { ServiceComponent } from './comp/service/service.component';
import { CtaComponent } from './comp/cta/cta.component';
import { PortfolioComponent } from './comp/portfolio/portfolio.component';
import { TeamComponent } from './comp/team/team.component';
import { PricingComponent } from './comp/pricing/pricing.component';
import { QuestionComponent } from './comp/question/question.component';
import { ContactComponent } from './comp/contact/contact.component';
import { FooterComponent } from './comp/footer/footer.component';


const routes: Routes = [
  //  { path: 'navbar',component:NavbarComponent },
  //  { path: 'head', component: HeadComponent },
  //  { path: 'content', component: ContentComponent },
  //  { path: 'aboutus', component: AboutusComponent },
  //  { path: 'why-us-section', component: WhyUsSectionComponent },
  //  { path: 'skills', component: SkillsComponent},
  //  { path: 'service', component: ServiceComponent},
  //  { path: 'cta', component: CtaComponent},
  //  { path: 'portfolio', component: PortfolioComponent},
  //  { path: 'team', component: TeamComponent},
  //  { path: 'pricing', component: PricingComponent},
  //  { path: 'question', component: QuestionComponent},
  //  { path: 'contact', component: ContactComponent},
  //  { path: 'footer', component: FooterComponent},
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'service',component:ServiceComponent}

   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
