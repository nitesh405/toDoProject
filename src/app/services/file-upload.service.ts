import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FileUpload } from '../models/file-upload';


@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private basePath = '/uploads';
  constructor(
    private db : AngularFireDatabase,
    private storage : AngularFireStorage
  ) { }

  pushFileToStorage( fileUpload : FileUpload  ){

  }

}
