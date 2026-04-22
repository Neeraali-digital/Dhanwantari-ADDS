import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-enquiry-form',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './enquiry-form.html',
  styleUrl: './enquiry-form.css'
})
export class EnquiryFormComponent implements OnInit {
  @Input() preSelectedCourse: string = 'B.Sc Nursing';
  
  enquiryForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.enquiryForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      course: ['', Validators.required],
      message: ['']
    });
  }

  ngOnInit() {
    this.enquiryForm.patchValue({ course: this.preSelectedCourse });
  }

  onSubmit() {
    if (this.enquiryForm.valid) {
      this.loading = true;
      // Simulate API call
      setTimeout(() => {
        this.loading = false;
        this.submitted = true;
        this.enquiryForm.reset({ course: this.preSelectedCourse });
      }, 2000);
    }
  }

  resetForm() {
    this.submitted = false;
  }
}
