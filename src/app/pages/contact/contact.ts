import { Component, OnInit, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact implements OnInit {
  private titleService = inject(Title);
  private metaService = inject(Meta);

  ngOnInit(): void {
    this.titleService.setTitle('Contact Us | Digital Smart Guide');

    this.metaService.updateTag({
      name: 'description',
      content:
        'Contact Digital Smart Guide for questions, suggestions, corrections, business enquiries or website feedback.'
    });

    this.metaService.updateTag({
      name: 'keywords',
      content:
        'Contact Digital Smart Guide, Digital Smart Guide email, finance guide contact, affiliate website contact'
    });
  }
}
