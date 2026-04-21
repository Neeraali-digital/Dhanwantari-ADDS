import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';
import { EnquiryFormComponent } from '../../components/enquiry-form/enquiry-form';

@Component({
  selector: 'app-bsc-nursing',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, EnquiryFormComponent],
  templateUrl: './bsc-nursing.html',
  styleUrl: './bsc-nursing.css'
})
export class BscNursingComponent {}
