describe('optIn', function() {
    var scope,
        html,
        compiled,
        element;

    beforeEach(module('signUpApp'));
    beforeEach(module('form-template.html'));
    beforeEach(inject(function($rootScope, $compile) {
        scope = $rootScope.$new();
        html = '<opt-in><div class="brand-logo"></div></opt-in>';
        compiled = $compile(html);
        element = compiled(scope);
        scope.$digest();
    }));
    it('should render the element', function() {

    });
});
