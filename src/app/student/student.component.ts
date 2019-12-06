import { Component, OnInit } from '@angular/core';
import { Student } from './../student';
import { StudentService } from './../student.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  displayedColumns: string[] = ['nisn', 'name', 'study'];
  dataSource: Student[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.onGet();
  }

  onGet() {
    this.studentService.getStudents()
      .subscribe(
        (response: any) => {
          this.dataSource = response;
          console.log(response)
        },
        (error) => console.log(error)
      );
  }

}
