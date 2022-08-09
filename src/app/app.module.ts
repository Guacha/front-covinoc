import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { UpdateFormComponent } from './components/update-form/update-form.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { AppContainerComponent } from './components/app-container/app-container.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    UpdateFormComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    AppContainerComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
