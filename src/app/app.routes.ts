import { Routes } from '@angular/router';
import { UserListComponent } from '@components/user-list/user-list.component';
import { HomeComponent } from '@components/home/home.component';
import { PhotoListComponent } from '@components/photo-list/photo-list.component';
import { CommentListComponent } from '@components/comment-list/comment-list.component';
import { PostListComponent } from '@components/post-list/post-list.component';
import { TodoListComponent } from '@components/todo-list/todo-list.component';
import { AlbumsComponent } from '@components/albums/albums.component';
import { NotfoundComponent } from '@components/notfound/notfound.component';
import { UserComponent } from '@components/user/user.component';

export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        component:HomeComponent
    }
    ,
    {
        path:'users',
        component:UserListComponent
    },
    {
        path:'photos',
        component:PhotoListComponent
    },
    {
        path:'comments',
        component:CommentListComponent
    },
    {
        path:'posts',
        component:PostListComponent
    },
    {
        path:'todos',
        component:TodoListComponent
    },
    {
        path:'albums',
        component:AlbumsComponent
    },
    {
        path:'user/:id/:name/:email/:age/:died', // masukkan property apa saja yang ingin di oper lewat url
        component:UserComponent
    },
    {
        path:'**',
        component:NotfoundComponent
    }
];
