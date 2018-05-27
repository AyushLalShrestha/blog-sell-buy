import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { DataService } from './services/data-service.service';

import { AppComponent } from './app.component';

import { BlogComponent } from './components/blog/blog.component';
import { BlogListComponent } from './components/blog/blog-list/blog-list.component';
import { BlogItemComponent } from './components/blog/blog-list/blog-item/blog-item.component';
import { BlogDetailComponent } from './components/blog/blog-detail/blog-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    BlogListComponent,
    BlogItemComponent,
    BlogDetailComponent
  ],
  imports: [BrowserModule, FormsModule, HttpModule],
  // imports: [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes) ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
