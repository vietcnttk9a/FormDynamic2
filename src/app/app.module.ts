import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgZorroAntdModule, NZ_I18N, vi_VN, NZ_ICONS, en_GB, NZ_DATE_LOCALE, NzDatePickerModule} from 'ng-zorro-antd';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import vi from '@angular/common/locales/vi';
import {DataService} from './api.service';

registerLocaleData(vi);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
  ],
  providers: [{provide: NZ_I18N, useValue: vi_VN}, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
