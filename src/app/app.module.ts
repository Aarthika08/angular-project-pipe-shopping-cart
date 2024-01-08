// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import{FormsModule} from '@angular/forms'
// // import { AppRoutingModule } from './app-routing.module';
// // import { AppComponent } from './app.component';
// // import { TestComponent } from './test/test.component';
// import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
// // import { ShoppingCartService } from './shopping-cart/shopping-cart.service';

// @NgModule({
//   declarations: [
//     AppComponent,TestComponent,ShoppingCartComponent
//   ],
//   imports: [
//     BrowserModule,AppRoutingModule,FormsModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent,ShoppingCartComponent]
// })
// export class AppModule { }


// src/app/app.module.ts


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
@NgModule({
  declarations: [ShoppingCartComponent],
  imports: [BrowserModule, FormsModule], // Include FormsModule
  // providers: [ShoppingCartService],
  bootstrap: [ShoppingCartComponent],
})
export class AppModule {}
