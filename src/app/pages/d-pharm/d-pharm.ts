import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';
import { EnquiryFormComponent } from '../../components/enquiry-form/enquiry-form';

@Component({
  selector: 'app-d-pharm',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, EnquiryFormComponent],
  templateUrl: './d-pharm.html',
  styleUrl: './d-pharm.css'
})
export class DPharmComponent {}
