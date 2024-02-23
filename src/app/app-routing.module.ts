import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RecipesModule } from './recipes/recipes.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full',
  },
  {
    path: 'recipes',
    loadChildren: () => RecipesModule,
    //   loadChildren: () =>
    //   import('./recipes/recipes.module').then((m) => m.RecipesModule),
    //  },this is JavaScript ES6 systax for loadchildren where as above is TypeScript syntax
  },
  { path: 'shopping-list', loadChildren: () => ShoppingListModule },
  { path: 'auth', loadChildren: () => AuthModule },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
