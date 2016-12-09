var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';
var RecipeListComponent = (function () {
    function RecipeListComponent() {
        this.recipes = [
            new Recipe('Schnitzel', 'Very Tasty', 'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg'),
            new Recipe('Summer Salad', 'Okayish', 'http://cdn.iowagirleats.com/wp-content/uploads/2013/05/Triple-Berry-Summer-Salad-03_mini.jpg')
        ];
        this.recipeSelected = new EventEmitter();
    }
    RecipeListComponent.prototype.ngOnInit = function () {
    };
    RecipeListComponent.prototype.onSelected = function (recipe) {
        this.recipeSelected.emit(recipe);
    };
    return RecipeListComponent;
}());
__decorate([
    Output(),
    __metadata("design:type", Object)
], RecipeListComponent.prototype, "recipeSelected", void 0);
RecipeListComponent = __decorate([
    Component({
        selector: 'rb-recipe-list',
        templateUrl: './recipe-list.component.html'
    }),
    __metadata("design:paramtypes", [])
], RecipeListComponent);
export { RecipeListComponent };
//# sourceMappingURL=../../../../../src/app/recipes/recipe-list/recipe-list.component.js.map