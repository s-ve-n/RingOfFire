import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.scss'],
})
export class EditPlayerComponent implements OnInit {
  allProfilePictures = [
    '1.webp',
    '2.png',
    'pinguin.svg',
    'monkey.png',
    'winkboy.svg',
    'serious-woman.svg',
  ];

  constructor() {}

  ngOnInit(): void {}
}
