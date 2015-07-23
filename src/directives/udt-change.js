angular.module('ultimateDataTableServices').
directive('udtChange', ['$interval', function($interval) {
	    		return {
	    			require: 'ngModel',
	    			link: function(scope, element, attrs, ngModel) {
						
						scope.needRefresh = false;
						scope.runFunction = function(){
							var unbindWatcher  = scope.$watch(attrs.udtChange, function(newValue){
								unbindWatcher();
							});
						};
	    				
						scope.$watch(attrs.ngModel, function(value){
							scope.needRefresh = true;
					    });
						
						$interval(function(){ 
							if(scope.needRefresh){
								scope.runFunction();
								scope.needRefresh = false;
							}
						}, 10);
	    			}
	    		};	    	
	    	}]);