var app= angular.module("myApp", ['ngRoute'])
					.config(function($routeProvider)
					{
						$routeProvider
							.when("/project1",{
									templateUrl:"templates/project1.html"
										
							})
							.otherwise({
							        templateUrl : "templates/projectlayout.html"
									
							    });
					});//k
/*					
app.controller('homeTransitionController',function(){
	
	
	
	
	
});f*/