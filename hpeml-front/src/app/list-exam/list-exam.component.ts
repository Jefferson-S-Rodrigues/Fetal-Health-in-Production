import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CtgExamService } from '../core/ctg-exam.service';
import { Examlist } from '../shared/models/examlist';


@Component({
  selector: 'app-list-exam',
  templateUrl: './list-exam.component.html',
  styleUrls: ['./list-exam.component.scss']
})
export class ListExamComponent implements AfterViewInit {

  displayedColumns: string[] = ['cpf', 'name', 'tsexam', 'result'];
  dataSource!: MatTableDataSource<Examlist>;
  exams!: Examlist[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private ctgExamService: CtgExamService) {
    this.ctgExamService.getAllExams().subscribe((examlist: Examlist[]) => {
      this.exams = examlist;
      this.dataSource = new MatTableDataSource(this.exams);
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}