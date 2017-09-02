angular.module("noteCollection")
    .controller('noteCollectionController', ['$scope', function($scope) {
        
    	$scope.notes = [];
    	let currentSelected = null;
    	let id= 0;

    	let dummy = document.createElement("div");
    	dummy.setAttribute("id", "dummy");
    	dummy.setAttribute("style", "width:30%; height:180px; border:1px solid #161616")

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
			let notes = [];
    		angular.forEach(document.getElementById("notePad").children, function(value){
				notes.push({
	    			id: id++,
	    			task: value.children[0].getAttribute("textnote")
	    		});
			})
    		notes.push({
    			id: id++,
    			task: data.data
    		});
    		$scope.notes = notes
    		
    	})
    	let dragged = null,
    		draggedEnter = null,
    		parent = null;

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
    			if(event.target.getAttribute("drag") === "enable"){
    				dragged = event.target;
    				parent = dragged.parentNode;
    			}
    			else
    				event.target = event.target.parentNode;
    		}
    			// console.log(dragged)
    	}

    	function drag(event){
    		event.preventDefault();
    			// console.log(dragged)
    		if(dragged !== null){
    			dragged.parentNode.removeChild(dragged);
    			dragged.style.opacity = 1;
    		}
    	}

    	function dragenter(event){
    		event.preventDefault();
    			// console.log(event.target.tagName)
    			
    	}

    	function dragover(event){
    		event.preventDefault();
    		if(event.target.getAttribute(id) === "dummy"){  
  		}
    		if(event.target.getAttribute("drag") === "enable"){
    				draggedEnter = event.target;
    			}
    	}

    	function dragexit(event){
    		event.preventDefault();
    	}

    	function dragleave(event){
    		event.preventDefault();
    	}

    	function drop(event){
    		event.preventDefault();
    		if(draggedEnter !== null){
    			draggedEnter.parentNode.insertBefore(dragged, draggedEnter);
	    		
	    	}
    		else{
    			document.getElementById("notePad").appendChild(dragged)
    		}
    		dragged = null;
    		draggedEnter = null;
    		parent = null;
    		
    	}

    	document.addEventListener("drag", drag, false);
    	document.addEventListener("dragstart", dragstart, false);
    	document.addEventListener("dragenter", dragenter, false);
    	document.addEventListener("dragover", dragover, false);
    	document.addEventListener("dragexit", dragexit, false);
    	document.addEventListener("dragleave", dragleave, false);
    	document.addEventListener("drop", drop, false);

    }]);
