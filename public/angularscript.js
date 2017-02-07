var app= angular.module("myApp", ['ngRoute'])
					.config(function($routeProvider)
					{
						$routeProvider
							.when("/project1",{
									templateUrl:"templates/project1.html"
										
							}).when("/project2",{
									templateUrl:"templates/project2.html"
										
							}).when("/project3",{
									templateUrl:"templates/project3.html"
										
							}).when("/project4",{
									templateUrl:"templates/project4.html"
										
							})
							.otherwise({
							        templateUrl : "templates/projectlayout.html"
									
							    });
					});//f