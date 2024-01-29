import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './comp/navbar/navbar.component';
import { HeadComponent } from './comp/head/head.component';
import { ContentComponent } from './comp/content/content.component';
import { FooterComponent } from './comp/footer/footer.component';
import { HomeComponent } from './comp/home/home.component';
import { AboutusComponent } from './comp/aboutus/aboutus.component';
import { WhyUsSectionComponent } from './comp/why-us-section/why-us-section.component';
import { SkillsComponent } from './comp/skills/skills.component';
import { ServiceComponent } from './comp/service/service.component';
import { CtaComponent } from './comp/cta/cta.component';
import { PortfolioComponent } from './comp/portfolio/portfolio.component';
import { TeamComponent } from './comp/team/team.component';
import { PricingComponent } from './comp/pricing/pricing.component';
import { QuestionComponent } from './comp/question/question.component';
import { ContactComponent } from './comp/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeadComponent,
    ContentComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    WhyUsSectionComponent,
    SkillsComponent,
    ServiceComponent,
    CtaComponent,
    PortfolioComponent,
    TeamComponent,
    PricingComponent,
    QuestionComponent,
    ContactComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
