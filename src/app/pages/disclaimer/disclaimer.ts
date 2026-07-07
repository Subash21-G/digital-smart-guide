import { Component, OnInit, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-disclaimer',
  imports: [],
  templateUrl: './disclaimer.html',
  styleUrl: './disclaimer.scss'
})
export class Disclaimer implements OnInit {
  private titleService = inject(Title);
  private metaService = inject(Meta);

  ngOnInit(): void {
    this.titleService.setTitle('Disclaimer | Digital Smart Guide');

    this.metaService.updateTag({
      name: 'description',
      content:
        'Read the Disclaimer of Digital Smart Guide. Our content is for general information and comparison purpose only. Always verify details on official websites.'
    });

    this.metaService.updateTag({
      name: 'keywords',
      content:
        'Digital Smart Guide disclaimer, finance disclaimer, affiliate disclaimer, product guide disclaimer, general information only'
    });
  }
}
