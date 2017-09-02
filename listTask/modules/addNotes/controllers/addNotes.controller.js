function addNotesController($scope, $rootScope) {
    function showOtherDiv(event){
        event.stopPropagation();
        document.getElementById("title").style.display = "block";
        document.getElementById("taskMenu").style.display = "block";
    };

    function hideOtherDiv(){
        document.getElementById("title").style.display = "none";
        document.getElementById("taskMenu").style.display = "none";
    };

    document.addEventListener('click', hideOtherDiv, false)
    document.getElementById("note").addEventListener('click', showOtherDiv, false);

    $scope.addToTask = function(){
        $rootScope.$broadcast("addTask", {data: $scope.note});
        hideOtherDiv();
        $scope.note = "";
    }

};

addNotesController.$inject = ['$scope', '$rootScope'];

angular.module("addNotes")
    .controller("addNotesController", addNotesController);