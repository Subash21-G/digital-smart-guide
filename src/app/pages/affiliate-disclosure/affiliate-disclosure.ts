import { Component, OnInit, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-affiliate-disclosure',
  imports: [],
  templateUrl: './affiliate-disclosure.html',
  styleUrl: './affiliate-disclosure.scss'
})
export class AffiliateDisclosure implements OnInit {
  private titleService = inject(Title);
  private metaService = inject(Meta);

  ngOnInit(): void {
    this.titleService.setTitle('Affiliate Disclosure | Digital Smart Guide');

    this.metaService.updateTag({
      name: 'description',
      content:
        'Read the Affiliate Disclosure of Digital Smart Guide and understand how affiliate links and partner commissions work on our website.'
    });

    this.metaService.updateTag({
      name: 'keywords',
      content:
        'Digital Smart Guide affiliate disclosure, affiliate links, partner commission, sponsored links, affiliate website disclosure'
    });
  }
}
