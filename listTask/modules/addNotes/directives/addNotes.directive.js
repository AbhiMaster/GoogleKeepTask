angular.module("addNotes")
    .directive('addNotes', function() {
        return {
            restrict: 'E',
            templateUrl: 'modules/addNotes/assets/views/addNotes.html',
            controller: 'addNotesController',
            scope: {}
        };
    });
