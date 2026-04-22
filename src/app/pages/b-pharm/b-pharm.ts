import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';
import { EnquiryFormComponent } from '../../components/enquiry-form/enquiry-form';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-b-pharm',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, EnquiryFormComponent, RevealDirective],
  templateUrl: './b-pharm.html',
  styleUrl: './b-pharm.css'
})
export class BPharmComponent {}
