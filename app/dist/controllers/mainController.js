/// <reference path="../_all.ts"/>
var ContactManagerApp;
(function (ContactManagerApp) {
    var MainController = (function () {
        function MainController($mdSidenav) {
            this.$mdSidenav = $mdSidenav;
        }
        MainController.prototype.toggleSideNav = function () {
            this.$mdSidenav('left').toggle();
        };
        MainController.$inject = ['$mdSidenav'];
        return MainController;
    }());
    ContactManagerApp.MainController = MainController;
    angular.module('contactManagerApp', ['ngMaterial'])
        .controller('mainController', MainController);
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=mainController.js.map