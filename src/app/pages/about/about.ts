import { Component, OnInit, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About implements OnInit {
  private titleService = inject(Title);
  private metaService = inject(Meta);

  ngOnInit(): void {
    this.titleService.setTitle('About Us | Digital Smart Guide');

    this.metaService.updateTag({
      name: 'description',
      content:
        'Learn about Digital Smart Guide, a Tamil-English informational website for finance, vehicles, tech products, courses and online service guides.'
    });

    this.metaService.updateTag({
      name: 'keywords',
      content:
        'About Digital Smart Guide, Tamil English guides, finance guides, vehicle guides, tech product guides, course guides'
    });
  }
}
