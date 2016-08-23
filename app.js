var app = angular.module('signUpApp', []);

app.directive('optIn', function() {
    return {
        templateUrl: 'form-template.html',
        restrict: 'E',
        transclude: true
    };
});
