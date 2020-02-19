import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './user/signup/signup.component';
import { SigninComponent } from './user/signin/signin.component';
import {ProfileComponent} from './profile/profile.component'
import {ProfileformComponent} from './profile/profileform/profileform.component'
import {PostFormComponent} from './post/post-form/post-form.component'
import {PostComponent} from './post/post.component'
import {ShowpostComponent} from './showpost/showpost.component'
import {UserprofileComponent} from './userprofile/userprofile.component'
import {ProductdetailComponent} from './productdetail/productdetail.component'
import {AuthGuard} from './auth/auth.guard'
import {CheckoutComponent} from './checkout/checkout.component'
import { SpamreportsComponent } from './user/spamreports/spamreports.component';
import {MypostsComponent} from './myposts/myposts.component'
import {MybidsComponent} from './mybids/mybids.component'
import {EditPostComponent} from './edit-post/edit-post.component'
import {EditprofileComponent} from './editprofile/editprofile.component'
import {AdminpanelComponent} from './adminpanel/adminpanel.component'
import {TestComponent} from './test/test.component'
import {ChatComponent} from './chat/chat.component' 
import {OrderComponent} from './order/order.component' 

export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignupComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SigninComponent }]
    },
    {
        path: 'spamreports', component: UserComponent,
        children: [{ path: '', component: SpamreportsComponent }]
    },
    {
        path: 'checkout', component: CheckoutComponent
       
    },
    {
        path: 'makeprofile', component: ProfileComponent,
        children: [{ path: '', component: ProfileformComponent }]
    },
    {
        path: 'makepost', component: PostComponent,
        children: [{ path: '', component: PostFormComponent }]
    },
    {
        path: 'showpost', component: ShowpostComponent
    },
    {
        path: 'userprofile', component: UserprofileComponent,canActivate:[AuthGuard]
    },
    {
        path: 'productdet', component: ProductdetailComponent
    },
    {
        path: 'myposts', component: MypostsComponent
    }
    ,
    {
        path: 'mybids', component: MybidsComponent
    },
    {
        path: 'editpost', component: EditPostComponent
    },
    {
        path: 'editprofile', component: EditprofileComponent
    },
    {
        path: 'adminpanel', component: AdminpanelComponent
    },
    {
        path: 'test', component: TestComponent
    },
    {
        path: 'chat', component: ChatComponent
    },
    {
        path: 'placeorder', component: OrderComponent
    },
    
];
