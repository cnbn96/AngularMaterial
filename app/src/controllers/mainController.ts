/// <reference path="../_all.ts"/>


module ContactManagerApp{
    
    export class MainController {
        static $inject = ['$mdSidenav'];
        constructor(
            private $mdSidenav: angular.material.IsidenavService
        ){}
        toggleSideNav(): void{
            this.$mdSidenav('left').toggle(); 
        }
    }
    angular.module('contactManagerApp',['ngMaterial'])
        .controller('mainController',MainController);
        
}