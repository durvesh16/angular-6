import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { ThumbnailListComponent } from './thumbnail-list/thumbnail-list.component';
import { ThumbnailFormComponent } from './thumbnail-form/thumbnail-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ThumbnailComponent,
    ThumbnailListComponent,
    ThumbnailFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
