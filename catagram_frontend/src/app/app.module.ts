import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { UmlComponent } from './pages/uml/uml.component';
import { MeriseComponent } from './pages/merise/merise.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardMiniComponent } from './components/card-mini/card-mini.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { HamburgerComponent } from './components/hamburger/hamburger.component';
import { HomeCardComponent } from './components/home-card/home-card.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UmlComponent,
    MeriseComponent,
    NavigationComponent,
    CardComponent,
    HeaderComponent,
    FooterComponent,
    CardMiniComponent,
    AccordionComponent,
    HamburgerComponent,
    HomeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
