import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { FreelanceComponent } from './componentes/freelance/freelance.component';
import { TestimonialComponent } from './componentes/testimonial/testimonial.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ServiciosComponent,
    PortfolioComponent,
    FreelanceComponent,
    TestimonialComponent,
    ContactoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
