import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-ml-images',
  templateUrl: './ml-images.component.html',
  styleUrls: ['./ml-images.component.css']
})
export class MlImagesComponent implements OnInit {

  imageUrl: string;
  error: string;

  constructor(
    private imageService: ImageService
  ) { }

  ngOnInit() {
  }

  refreshImage() {
    this.imageService.getRandom().toPromise().then(image => {
      this.imageUrl = image.name;
    }).catch(err => {
      this.error = '¡El servidor no quiere devolver imagenes!';
      setTimeout(() => { this.error = null; }, 3000);
    });
  }

}
