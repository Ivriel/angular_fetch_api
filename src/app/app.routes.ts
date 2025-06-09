import { Routes } from '@angular/router';
import { UserListComponent } from '@components/user-list/user-list.component';
import { HomeComponent } from '@components/home/home.component';
import { PhotoListComponent } from '@components/photo-list/photo-list.component';
import { CommentListComponent } from '@components/comment-list/comment-list.component';
import { PostListComponent } from '@components/post-list/post-list.component';
import { TodoListComponent } from '@components/todo-list/todo-list.component';

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
    }
];
