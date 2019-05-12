// Modules
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Directives
import { DndDirective } from '@directives';
import { AppRoutingModule, MaterialModule } from '@modules';
// Services
import { HttpService, WsService } from '@services';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
// Components
import { AppComponent } from './app.component';
import { DragAndDropComponent } from './components/home/drag-and-drop/drag-and-drop.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
const config: SocketIoConfig = { url: 'http://localhost:4444', options: {} };

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, DragAndDropComponent, DndDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [HttpService, WsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
