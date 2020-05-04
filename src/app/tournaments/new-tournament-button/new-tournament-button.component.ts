import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {HostListener} from "@angular/core";
import {faPlusSquare, faTrophy} from "@fortawesome/free-solid-svg-icons";
import {IconDefinition} from "@fortawesome/fontawesome-common-types";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-tournament-button',
  templateUrl: './new-tournament-button.component.html',
  styleUrls: ['./new-tournament-button.component.scss']
})
export class NewTournamentButtonComponent implements OnInit, OnChanges {
  @Input() format: string;
  public faTrophy: IconDefinition = faTrophy;
  public faPlusSquare: IconDefinition = faPlusSquare;
  public label: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.ngOnChanges();
  }

  ngOnChanges() {
    this.label = this.getLabel(this.format);
  }

  getLabel(format: string) {
    return 'Create a new ' + format + ' tournament';
  }

  @HostListener("click") onClick() {
    return this.router.navigate(['/tournaments/new', this.format]);
  }
}
