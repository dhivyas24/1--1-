import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  personalInfoForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.personalInfoForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // Other personal information fields
    });
  }
  submitPersonalInfo() {
    if (this.personalInfoForm.invalid) {
      return;
    }
  
    const formData = this.personalInfoForm.value;
    this.http.post('http://localhost:8080/api/job-applications/personal-info', formData)
      .subscribe(
        (response) => {
          console.log('Personal information submitted successfully:', response);
          this.router.navigate(['/work-experience']);
        },
        (error) => {
          console.error('Error submitting personal information:', error);
        }
      );
  }
}  