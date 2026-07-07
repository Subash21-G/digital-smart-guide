import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Category } from './pages/category/category';
import { ArticleDetail } from './pages/article-detail/article-detail';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';
import { AffiliateDisclosure } from './pages/affiliate-disclosure/affiliate-disclosure';
import { Disclaimer } from './pages/disclaimer/disclaimer';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'category/:name', component: Category },
  { path: 'article/:slug', component: ArticleDetail },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'privacy-policy', component: PrivacyPolicy },
  { path: 'affiliate-disclosure', component: AffiliateDisclosure },
  { path: 'disclaimer', component: Disclaimer },
  { path: '**', redirectTo: '' }
];
