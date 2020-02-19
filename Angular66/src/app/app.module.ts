import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './user/signup/signup.component';

import { appRoutes } from './routes';
import { ProfileComponent } from './profile/profile.component';
import { ProfileformComponent } from './profile/profileform/profileform.component';
import { PostComponent } from './post/post.component';
import { PostFormComponent } from './post/post-form/post-form.component';
import { ShowpostComponent } from './showpost/showpost.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { SigninComponent } from './user/signin/signin.component';
import { UserService } from './shared/user.service';

import {AuthGuard} from './auth/auth.guard';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { CheckoutComponent } from './checkout/checkout.component'
import { SpamreportsComponent } from './user/spamreports/spamreports.component';
import { MypostsComponent } from './myposts/myposts.component';
import { MybidsComponent } from './mybids/mybids.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { TestComponent } from './test/test.component';
import { ChatComponent } from './chat/chat.component';
import { OrderComponent } from './order/order.component'
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignupComponent,
    ProfileComponent,
    ProfileformComponent,
    PostComponent,
    PostFormComponent,
    ShowpostComponent,
    SpamreportsComponent,
    UserprofileComponent,
    SigninComponent,
    ProductdetailComponent,
    CheckoutComponent,
    MypostsComponent,
    MybidsComponent,
    EditPostComponent,
    EditprofileComponent,
    AdminpanelComponent,
    TestComponent,
    ChatComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
