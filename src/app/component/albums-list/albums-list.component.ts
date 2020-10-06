import { Component, OnInit } from '@angular/core';
import {Album} from '../../model/album.model';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css']
})
export class AlbumsListComponent implements OnInit {
public albums: Album[] = [];
  constructor() { }

  ngOnInit(): void {
    const newAlbum: Album = {
      id: 1,
      userId: 3,
      tittle: 'Lorem ipsum'
    };

    this.albums.push(newAlbum);

  }

}
