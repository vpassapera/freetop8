import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaguesRoutingModule } from './leagues-routing.module';
import { HomeComponent } from './home/home.component';
import { SponsoredLeaguesComponent } from './sponsored-leagues/sponsored-leagues.component';
import { ViewComponent } from './view/view.component';
import { LeaguesListComponent } from './leagues-list/leagues-list.component';
import { TopLeaguesComponent } from './top-leagues/top-leagues.component';
import { NewLeagueButtonComponent } from './new-league-button/new-league-button.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [HomeComponent, SponsoredLeaguesComponent, ViewComponent, LeaguesListComponent, TopLeaguesComponent, NewLeagueButtonComponent],
    imports: [
        CommonModule,
        LeaguesRoutingModule,
        FontAwesomeModule
    ]
})
export class LeaguesModule { }
