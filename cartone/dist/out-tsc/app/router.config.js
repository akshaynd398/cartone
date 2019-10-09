import { RouterModule } from '@angular/router';
import { ProductsPage } from './pages/products/products.pages';
import { CheckoutPage } from './pages/checkout/checkout.pages';
import { BillingPage } from './pages/billing/billing.pages';
var appRoutes = [
    { path: 'products', component: ProductsPage },
    { path: 'billing', component: BillingPage },
    { path: 'checkout', component: CheckoutPage },
    {
        path: '',
        redirectTo: '/products',
        pathMatch: 'full'
    }
];
export var RouterConfig = [
    RouterModule.forRoot(appRoutes, {
        enableTracing: false,
        useHash: false
    })
];
export var RouterDeclarations = [ProductsPage, BillingPage, CheckoutPage];
//# sourceMappingURL=router.config.js.map