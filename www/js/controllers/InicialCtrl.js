ggr.controller('InicialCtrl', ['$scope', '$location',  'audio',
	function($scope, $location, audio){

		//audio.play('music/02.mp3');

		$scope.btnDeclaracao = function(){
			$location.path('/lee/declaracao');
		};

		$scope.btnFotos = function(){
			$location.path('/lee/fotos');
		};

		$scope.btnVoce = function(){
			$location.path('/lee/tipo_de_gasto');
		};

	}
]);