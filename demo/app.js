(function () {
    'use strict';

    angular
        .module('tableSorterDemo', ['twrSortableTable'])
        .controller('tableSorterController', tableSorterController);


    function tableSorterController() {
        var vm = this;

        vm.settings = {
            showStateTableCode: false,
            showGameTableCode: false,
            showJsonData: false
        }
        vm.toggleStateTableCode = toggleStateTableCode;
        vm.toggleGameTableCode = toggleGameTableCode;
        vm.toggleJsonData = toggleJsonData;

        vm.states = [
            { name: 'Washington', capital: 'Olympia', nickname: 'The Evergreen State', statehoodDate: new Date(1889, 11, 11) },
            { name: 'New York', capital: 'Albany', nickname: 'Empire State', statehoodDate: new Date(1788, 7, 26) },
            { name: 'California', capital: 'Sacramento', nickname: 'Golden State', statehoodDate: new Date(1850, 9, 9) },
            { name: 'Texas', capital: 'Austin', nickname: 'Lone Star State', statehoodDate: new Date(1845, 12, 29) },
        ]

        vm.games = [
            { name: 'Super Metroid', platform: 'SNES', releaseDate: new Date(1994, 4, 18) },
            { name: 'Fallout 2', platform: 'Windows', releaseDate: new Date(1998, 9, 30) },
            { name: 'The Legend of Zelda', platform: 'NES', releaseDate: new Date(1987, 8, 22) },
            { name: 'Master of Orion 2', platform: 'Windows', releaseDate: new Date(1996, 10, 31) }
        ]

        function toggleStateTableCode() {
            vm.settings.showStateTableCode = !vm.settings.showStateTableCode;
        }
        function toggleGameTableCode() {
            vm.settings.showGameTableCode = !vm.settings.showGameTableCode;
        }
        function toggleJsonData() {
            vm.settings.showJsonData = !vm.settings.showJsonData;
        }
    }
})();