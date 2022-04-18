import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PregnancyService } from '../core/pregnancy.service';
import { ResultDialogComponent } from '../shared/components/dialogs/result-dialog/result-dialog.component';
import { Ctgexam } from '../shared/models/ctgexam';
import { Pregnancy } from '../shared/models/pregnancy';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {

  fieldsExam = [
    { controlName: 'baseline_value', step: 1, min: 0, mean: 150, max: 250, title: 'Linha de base', description: 'linha de base da FC (batimentos por minuto)' },
    { controlName: 'accelerations', step: 0.001, min: 0.0, mean: 0.002, max: 0.1, title: 'Acelerações', description: 'Número de acelerações por segundo' },
    { controlName: 'fetal_movement', step: 0.001, min: 0.0, mean: 0.000, max: 1.0, title: 'Movimento fetal', description: 'Número de movimentos fetais por segundo' },
    { controlName: 'uterine_contractions', step: 0.001, min: 0.0, mean: 0.004, max: 1.0, title: 'Contrações uterinas', description: 'Número de contrações uterinas por segundo' },
    { controlName: 'light_decelerations', step: 0.001, min: 0.0, mean: 0.000, max: 1.0, title: 'Desacelerações leves', description: 'Número de desacelerações leves por segundo' },
    { controlName: 'severe_decelerations', step: 0.001, min: 0.0, mean: 0.000, max: 1.0, title: 'Desacelerações severas', description: 'Número de desacelerações severas por segundo' },
    { controlName: 'prolongued_decelerations', step: 0.001, min: 0.0, mean: 0.000, max: 1.0, title: 'Desacelerações prolongadas', description: 'Número de desacelerações prolongadas por segundo' },
    { controlName: 'abnormal_short_term_variability', step: 1, min: 0.0, mean: 50, max: 100, title: 'Variabilidade anormal de curto prazo', description: 'Porcentagem de tempo com variabilidade anormal de curto prazo' },
    { controlName: 'mean_value_of_short_term_variability', step: 0.1, min: 0, mean: 1, max: 20, title: 'Valor médio da variabilidade de curto prazo', description: 'Valor médio da variabilidade de curto prazo' },
    { controlName: 'percentage_of_time_with_abnormal_long_term_variability', step: 1, min: 0.0, mean: 0.000, max: 100, title: 'Porcentagem de tempo com variabilidade anormal de longo prazo', description: 'Porcentagem de tempo com variabilidade anormal de longo prazo' },
    { controlName: 'mean_value_of_long_term_variability', step: 1, min: 0.0, mean: 5, max: 100, title: 'Valor médio da variabilidade a longo prazo', description: 'Valor médio da variabilidade a longo prazo' },
    { controlName: 'histogram_width', step: 1, min: 0, mean: 70, max: 300, title: 'Largura do histograma', description: 'Largura do histograma da FCF' },
    { controlName: 'histogram_min', step: 1, min: 50.0, mean: 100, max: 300, title: 'Histogram min', description: 'Mínimo (baixa frequência) do histograma da FCF' },
    { controlName: 'histogram_max', step: 1, min: 0, mean: 150, max: 500, title: 'Histogram max', description: 'Máximo (alta frequência) do histograma da FCF' },
    { controlName: 'histogram_number_of_peaks', step: 1, min: 0.0, mean: 3, max: 100, title: 'Número de picos do histograma', description: 'Número de picos do histograma' },
    { controlName: 'histogram_number_of_zeroes', step: 1, min: 0.0, mean: 0.000, max: 100, title: 'Número de zeros do histograma', description: 'Número de zeros do histograma' },
    { controlName: 'histogram_mode', step: 1, min: 0.0, mean: 100, max: 300, title: 'Modo de histograma', description: 'Modo de histograma' },
    { controlName: 'histogram_mean', step: 1, min: 0, mean: 100, max: 300, title: 'Histograma médio', description: 'Histograma médio' },
    { controlName: 'histogram_median', step: 1, min: 0, mean: 100, max: 300, title: 'Histograma mediano', description: 'Histograma mediano' },
    { controlName: 'histogram_variance', step: 1, min: 0, mean: 10, max: 500, title: 'Variância do Histograma', description: 'Variação do histograma' },
    { controlName: 'histogram_tendency', step: 0.001, min: -1.0, mean: 0.000, max: 1.000, title: 'Tendência do Histograma', description: 'Tendência do histograma' }
  ];

  pregname: string = '';

  examForm = this.fb.group({
    cpf: [null, Validators.compose([
      Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern(/^[0-9]\d*$/)])
    ],
    baseline_value: [this.fieldsExam[0].mean],
    accelerations: [this.fieldsExam[1].mean],
    fetal_movement: [this.fieldsExam[2].mean],
    uterine_contractions: [this.fieldsExam[3].mean],
    light_decelerations: [this.fieldsExam[4].mean],
    severe_decelerations: [this.fieldsExam[5].mean],
    prolongued_decelerations: [this.fieldsExam[6].mean],
    abnormal_short_term_variability: [this.fieldsExam[7].mean],
    mean_value_of_short_term_variability: [this.fieldsExam[8].mean],
    percentage_of_time_with_abnormal_long_term_variability: [this.fieldsExam[9].mean],
    mean_value_of_long_term_variability: [this.fieldsExam[10].mean],
    histogram_width: [this.fieldsExam[11].mean],
    histogram_min: [this.fieldsExam[12].mean],
    histogram_max: [this.fieldsExam[13].mean],
    histogram_number_of_peaks: [this.fieldsExam[14].mean],
    histogram_number_of_zeroes: [this.fieldsExam[15].mean],
    histogram_mode: [this.fieldsExam[16].mean],
    histogram_mean: [this.fieldsExam[17].mean],
    histogram_median: [this.fieldsExam[18].mean],
    histogram_variance: [this.fieldsExam[19].mean],
    histogram_tendency: [this.fieldsExam[20].mean]
  });

  constructor(
    private fb: FormBuilder,
    private pregnancyService: PregnancyService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  set txtCPF(value: string) {
    if (value?.length == 11 && /^\d+$/.test(value)) {
      this.pregnancyService.pregnancyName(value).subscribe((pregnancy: Pregnancy) => {
        this.pregname = pregnancy?.name;
      });
    } else {
      this.pregname = '';
    }
  }

  onSubmit() {
    this.examForm.markAllAsTouched();
    if (this.examForm.invalid) {
      return;
    }

    const ctgexam = this.examForm.getRawValue() as Ctgexam;

    this.openDialog(ctgexam);

  }

  openDialog(ctgexam: Ctgexam): void {
    const dialogRef = this.dialog.open(ResultDialogComponent, {
      width: '250px',
      data: ctgexam,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.examForm.reset();
      }
    });
  }

}
