import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CtgExamService } from 'src/app/core/ctg-exam.service';
import { Ctgexam } from 'src/app/shared/models/ctgexam';

@Component({
  selector: 'app-result-dialog',
  templateUrl: './result-dialog.component.html',
  styleUrls: ['./result-dialog.component.scss']
})
export class ResultDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ResultDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public exam: Ctgexam,
    private ctgexamService: CtgExamService,
  ) {}

  ngOnInit(): void {
    this.ctgexamService.saveCTGExam(this.exam).subscribe(result => {
      this.exam.id = result?.id;
      this.exam.fetal_health = result?.fetal_health;
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
