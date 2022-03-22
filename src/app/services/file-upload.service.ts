import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FileUpload } from '../models/file-upload';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private basePath = '/uploads';
  constructor(
    private db : AngularFireDatabaseModule,
    private storage : AngularFireStorage
  ) { }

  pushFileToStorage( fileUpload: FileUpload | File | null | undefined   ) {
    // const filePath = `${this.basePath}/${fileUpload?.name}`;
    // const storageRef = this.storage.ref(filePath);
    // const uploadTask = this.storage.upload(filePath, fileUpload.file);
    // uploadTask.snapshotChanges().pipe(
    //   finalize(() =>{
    //     storageRef.getDownloadURL().subscribe(downloadUrl => {
    //       fileUpload.url = downloadUrl;
    //       fileUpload.name = fileUpload.file?.name;
    //       this.saveFileData(fileUpload);
    //     })
    //   })
    // ).subscribe();
    // return uploadTask.percentageChanges();
  }

  saveFileData(fileUpload : FileUpload) : void{
    // this.db.list(this.basePath).push(fileUpload);
  }

}
function finalize(arg0: () => void): import("rxjs").OperatorFunction<import("firebase/compat").default.storage.UploadTaskSnapshot | undefined, unknown> {
  throw new Error('Function not implemented.');
}

