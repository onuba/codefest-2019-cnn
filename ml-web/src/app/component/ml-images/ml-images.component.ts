import { Component, OnInit } from '@angular/core';
import { IaService } from 'src/app/services/ia.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-ml-images',
  templateUrl: './ml-images.component.html',
  styleUrls: ['./ml-images.component.css']
})
export class MlImagesComponent implements OnInit {

  imageUrl: string;
  error: string;
  prediction: any;
  predictionSelected: string;

  constructor(
    private imageService: ImageService,
    private iaService: IaService
  ) { }

  ngOnInit() {
  }

  refreshImage(callback = null) {
    this.imageService.getRandom().toPromise().then(image => {
      this.imageUrl = image.name;
      if (callback) { callback(null, this.imageUrl); }
    }).catch(err => {
      if (callback) { callback(err); }
      this.error = '¡El servidor no quiere devolver imagenes!';
      setTimeout(() => { this.error = null; }, 3000);
    });
  }

  predict() {
    this.prediction = null;
    this.iaService.getPredict(this.imageUrl).toPromise().then(result => {
      this.selectMaxValue(result.predict);
      this.prediction = result.predict;
    }).catch(err => {
      this.error = '¡El servidor no quiere predecir resultado!';
      setTimeout(() => { this.error = null; }, 3000);
    });
  }

  refreshAndPredict() {
    this.refreshImage(err => { if (!err) { this.predict(); } });
  }

  selectMaxValue(prediction) {
    if (prediction && Array.isArray(prediction)) {
      let max = -1;
      let selected;
      prediction.forEach(p => {
        if (Number(p.value) > max) { max = Number(p.value); selected = p.name; }
      });
      this.predictionSelected = selected;
    }
  }

}
