import { Component } from '@angular/core';
import { PhotoService } from './photos.service';
import {Post} from './post';
@Component({
    selector: 'my-app',
    template : `
              <div class="container">
                <mainmenu></mainmenu>
                <router-outlet></router-outlet>
                <p *ngIf="isLoading"><i class="fa fa-spinner fa-spin fa-3x"></i></p>  
                <table class="table table-striped table-bordered">
                    <tr *ngFor="let photo of photos">
                        <td>{{photo.id}}</td>
                        <td> {{photo.albumId}}</td>
                        <td> {{photo.title}} </td>
                        <td><img width="10" height="10" src="{{photo.url}}"></td>
                    </tr>
                </table>
              </div>
            `,
    providers: [PhotoService]
})
export class AppComponent {
    photos: Post;
    isLoading: boolean = true;
    constructor(photoService: PhotoService) {
        photoService.getPosts().subscribe(res => {
            this.isLoading = false;
            console.log(res.title);
            this.photos = res;
        });
    }
    name = 'Angular';
}