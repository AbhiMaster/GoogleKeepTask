angular.module("noteCollection")
	.directive('noteCollection', function() {
        return {
            restrict: 'E',
            templateUrl: 'modules/noteCollection/assets/views/noteCollection.html',
            controller: 'noteCollectionController',
            scope: {}
        };
    });

