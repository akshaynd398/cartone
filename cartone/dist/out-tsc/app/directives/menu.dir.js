var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
var MenuDir = /** @class */ (function () {
    function MenuDir() {
    }
    MenuDir = __decorate([
        Component({
            selector: 'menu',
            template: "\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light d-print-none\">\n  <a class=\"navbar-brand\" href=\"#\" routerLink = '/products'><img src=\"image\" class=\"logo mr-2\"/>Trend Shopping</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink = '/products'>Products <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink = '/billing'>Billing</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"  routerLink = '/checkout'>Checkout</a>\n      </li>      \n    </ul>\n  </div>\n</nav>\n  ",
            styles: ["\n    .logo{\n      height: 60px;\n      width: auto;\n    }\n  "]
        })
    ], MenuDir);
    return MenuDir;
}());
export { MenuDir };
//# sourceMappingURL=menu.dir.js.map