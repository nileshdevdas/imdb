import { Component } from '@angular/core';
import { PhotoService } from './photos.service';
@Component({
    selector: 'my-app',
    template: `
              <div class="container-fluid">
                <mainmenu></mainmenu>
                <router-outlet></router-outlet>
                <p *ngIf="isLoading"><i class="fa fa-spinner fa-spin fa-3x"></i></p>  
                <li *ngFor="let photo of photos" >
                  {{photo.id}}
                </li>
              </div>
            `,
    providers: [PhotoService]
})

export class AppComponent {
    photos: any;
    isLoading: boolean = true;;
    constructor(photoService: PhotoService) {
        photoService.getPosts().then(res => {
            this.isLoading = false;
            console.log(res);
            this.photos = res;
        });
    }
    name = 'Angular';
}
