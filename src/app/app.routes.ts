import { Routes, RouterLink } from '@angular/router';
import { Component} from '@angular/core';
import { NewComp } from './Components/new-comp/new-comp';
import { Home } from './Components/home/home';
import { Sec } from './Components/sec/sec';
import { Parent } from './Components/parent/parent';
import { Child } from './Components/child/child';


    export const routes: Routes = [


        { path: '', component: Home },
        { path: 'new-comp/new-comp', component: NewComp },
        { path: 'sec', component: Sec },
        { path: 'parent', component: Parent },
        { path: 'child', component: Child }
        


        
    ];
 
  


