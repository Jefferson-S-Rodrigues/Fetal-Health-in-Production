import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PregnancyService } from '../core/pregnancy.service';
import { Pregnancy } from '../shared/models/pregnancy';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {

  pregname: string = '';

  examForm = this.fb.group({
    CPF: [null, Validators.compose([
      Validators.required, Validators.minLength(11), Validators.maxLength(11)])
    ]
  });

  constructor(
    private fb: FormBuilder,
    private pregnancyService: PregnancyService
    ) { }

  ngOnInit(): void {
  }

  set txtCPF(value: string) {
    if (value?.length == 11) {
      console.log(this.pregname);
      this.pregnancyService.pregnancyName(value).subscribe((pregnancy: Pregnancy) => this.pregname = pregnancy.name);
      console.log(this.pregname);
    }
  }

  onSubmit() {

  }

}
