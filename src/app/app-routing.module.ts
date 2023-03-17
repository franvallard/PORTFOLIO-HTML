import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { PanelComponent } from './panel/panel.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  { path: '', component:IndexComponent },

  { path: 'login', component:LoginComponent },

  { path: 'registro', component:RegistroComponent },

  { path: 'banner', component:BannerComponent },
  
  { path: 'footer', component:FooterComponent },

  { path: 'presentacion', component:PresentacionComponent },

  { path: 'panel', component:PanelComponent },

  { path: '**', component:ErrorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
