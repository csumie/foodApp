angular.module('myApp').component('characterList', {
	templateUrl: 'js/characters/character-list.template.html',
	controller: function CharacterListController($http) {
		this.orderProp = 'date'
		this.statusProp = 'aStatus', 'bStatus', 'cStatus'
		$http.get('data/characters.json')
		.then((response) => this.characters = response.data)
	}

});




















