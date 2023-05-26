import { Routes } from "@angular/router";

export const content: Routes = [
    {
      path: 'catalog',
      loadChildren: () => import('../../components/catalog-page/catalog-page.component.module').then(m => m.CatalogPageModule),
      data: {
        breadcrumb: ""
      },
    },
    {
        path: 'tests',
        loadChildren: () => import('../../components/tests-page/test-page.component.module').then(m => m.TestsPageModule),
        data: {
          breadcrumb: ""
        },
      }
]