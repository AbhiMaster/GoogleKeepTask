angular.module("note")
	.directive('note', function(listAppService) {
        return {
            restrict: 'E',
            templateUrl: 'modules/note/assets/views/note.html',
            controller: 'showTaskController',
            link: function(scope, elem, attrs) {
            	// let taskId = attrs.taskIndex;
            	// let task = listAppService.listAppFunctions.getTaskByIndex(taskId);
            	// scope.task = task;
            },
            scope: {}
        };
    });

