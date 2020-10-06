import {Component, OnInit} from '@angular/core';
import {Album} from '../../model/album.model';
import {AlbumsService} from '../../service/albums.service';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css']
})
export class AlbumsListComponent implements OnInit {
  public albums: Album[] = [];

  constructor(
    private albumsService: AlbumsService
  ) {
  }

  ngOnInit(): void {
    this.albumsService.getAlbums().subscribe((albums) => {
      this.albums = albums;

    });
  }

}
