/*global angular, alert, console*/
"use strict";

/*==============================================
=            Aplicación de Angular            =
==============================================*/

var tng = angular.module('tng', []);

/*-----  End of Aplicación de Angular  ------*/


/*=================================
=            Servicios            =
=================================*/

tng.service("Auth",function(){
	var retval = {
		loggedOn : false,
		userData : {},
		login : function($username,$password){
			console.log("Ok ya recibi",$username,$password);
			retval.loggedOn = true;
			//hacemos login (lado Server)
			// @todo
		},
		logout : function(){
			//hacemos el logout (lado Cliete)
			retval.loggedOn = false;
			retval.userData = {};
			//hacemos logout (lado Server)
			// @todo
		}
	};
	return retval;
});

/*-----  End of Servicios  ------*/



/*=====================================
=            Controladores            =
=====================================*/

tng.controller("Menu", function($scope, Auth){
	$scope.loggedOn = Auth.loggedOn;
	$scope.username = Auth.userData.username || ""; 
	$scope.password = ""; 
	console.log($scope);
	$scope.doLogin = function(){
		Auth.login($scope.username,$scope.password);
	};
	$scope.doLogout = function(){
		Auth.logout();
	};
});
tng.controller("Carrito", function($scope){
	
});


/*-----  End of Controladores  ------*/

