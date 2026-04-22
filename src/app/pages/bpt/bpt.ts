import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';
import { EnquiryFormComponent } from '../../components/enquiry-form/enquiry-form';

@Component({
  selector: 'app-bpt',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, EnquiryFormComponent],
  templateUrl: './bpt.html',
  styleUrl: './bpt.css'
})
export class BptComponent {}
