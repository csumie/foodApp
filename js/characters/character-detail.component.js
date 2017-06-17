angular.module('myApp').component('characterDetail', {
	templateUrl: 'js/characters/character-detail.template.html',
	controller: function CharacterListController($routeParams, $http) {

		$http.get('data/' + $routeParams.characterId + '.json')
		.then(response => {
			this.character = response.data
		});
	}
});



