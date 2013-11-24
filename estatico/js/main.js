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

tng.service("Auth",function($http){
	var retval = {
		loggedOn : false,
		userData : {},
		login : function(username,password){
			//hacemos login (lado Server)
			// @todo
			$http.post("/login",{"username" : username, "password" : password}).success(function(data){
				retval.loggedOn = true;
				retval.userData = data;
			}).error(function(error){
				alert("no fue posible abrir sesion .. !!");
			});
		},
		logout : function(){
			console.log("Cerramos Sesión !");
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
	$scope.auth = Auth;
});
tng.controller("Carrito", function($scope){
	
});


/*-----  End of Controladores  ------*/

