import { Component, OnInit, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-privacy-policy',
  imports: [],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss'
})
export class PrivacyPolicy implements OnInit {
  private titleService = inject(Title);
  private metaService = inject(Meta);

  ngOnInit(): void {
    this.titleService.setTitle('Privacy Policy | Digital Smart Guide');

    this.metaService.updateTag({
      name: 'description',
      content:
        'Read the Privacy Policy of Digital Smart Guide and understand how we handle basic user information, cookies, affiliate links and third-party websites.'
    });

    this.metaService.updateTag({
      name: 'keywords',
      content:
        'Digital Smart Guide privacy policy, affiliate privacy policy, cookies, third party links, user privacy'
    });
  }
}
