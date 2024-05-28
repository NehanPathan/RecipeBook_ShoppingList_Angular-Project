import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({ declarations: [AppComponent, HeaderComponent],
    bootstrap: [AppComponent], imports: [BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        SharedModule,
        CoreModule,
        StoreModule.forRoot({}, {}),
        EffectsModule.forRoot([])], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {}
