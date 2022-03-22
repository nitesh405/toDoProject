import { Component, OnInit } from '@angular/core';
import { FileUpload } from 'src/app/models/file-upload';
import { FileUploadService } from 'src/app/services/file-upload.service';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})
export class UploadFormComponent implements OnInit {
  currentFileUpload: FileUpload | any;
  selectedFiles :String | any;
  percentage: number | undefined;
  constructor(
    private uploadService : FileUploadService
  ) { }

  ngOnInit(): void {
  }

  selectFile($val: any) : void{
    this.selectedFiles = $val.target.files[0];
  }

  upload (){
    this.currentFileUpload = this.selectedFiles;
    this.uploadService.pushFileToStorage(this.selectedFiles).subscribe(percentage => {
       this.percentage = Math.round(percentage);
    },
    err => {
      console.log(err)
    })
  }
}
