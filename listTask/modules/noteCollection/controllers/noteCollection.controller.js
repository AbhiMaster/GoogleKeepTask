angular.module("noteCollection")
    .controller('noteCollectionController', ['$scope', function($scope) {
        
    	$scope.notes = [];
    	let currentSelected = null;
    	let id= 0;

    	$scope.changeColor = function(color){
    		currentSelected.children[0].style.background = color;
    	};

    	$scope.deleteTask = function(index){
    		$scope.notes.splice(index, 1)
    	}

    	$scope.copyTask = function(index){
    		$scope.notes.push({
    			id: id++,
    			task: $scope.notes[index].task
    		});
    	};

    	$scope.$watch(function(){
    		return $scope.notes.length
    	}, function(newValue, oldValue){
    		if(newValue !== oldValue){
    			setTimeout(function(){
	    		    angular.forEach(document.getElementById("notePad").children, function(value){
		    			value.addEventListener("mouseenter", showOptions, false)
		    			value.addEventListener("mouseleave", hideOptions, false)
		    		})
	    		}, 200);
    		}
    	})

    	$scope.$on("addTask", function(event, data){
    		$scope.notes.push({
    			id: id++,
    			task: data.data
    		});
    		
    	})
    	let dragged = null;

    	function showOptions(event){
    		currentSelected = event.target;
    		currentSelected.children[0].children[1].children[0].style.display = "block";
    	}

    	function hideOptions(event){
    		currentSelected.children[0].children[1].children[0].style.display = "none";
    	}

    	function dragstart(event){
    		if(dragged !== null)
    			return;
    		while(dragged === null || event.target.tagName === "BODY"){
    			if(event.target.getAttribute("drag") === "enable")
    				dragged = event.target;
    			else
    				event.target = event.target.parentNode;
    		}
    			// console.log(dragged)
    	}

    	function drag(event){
    			// console.log(dragged)
    		if(dragged !== null){
    			dragged.parentNode.removeChild(dragged);
    			dragged.style.opacity = 1;
    		}
    	}

    	function dragenter(event){

    	}

    	function dragover(event){

    	}

    	function dragexit(event){

    	}

    	function dragleave(event){
    		dragged = null;
    		// console.log(event.target)
    	}

    	function drop(event){
    		// dragged = null;
    		console.log("event.target")
    	}

    	document.addEventListener("drag", drag, false);
    	document.addEventListener("dragstart", dragstart, false);
    	document.addEventListener("dragenter", dragenter, false);
    	document.addEventListener("dragover", dragover, false);
    	document.addEventListener("dragexit", dragexit, false);
    	document.addEventListener("dragleave", dragleave, false);
    	document.addEventListener("drop", drop, false);

    }]);