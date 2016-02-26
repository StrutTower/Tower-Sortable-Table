(function () {
    'use strict';

    angular
        .module('twrSortableTable', [])
        .directive('twrSortableTable', twrSortableTable)
        .directive('twrTableSorter', twrTableSorter);

    function twrSortableTable() {
        return {
            restrict: 'A',
            scope: {
                twrSortingVariable: '='
            },
            controller: ['$scope', function (scope) {
                scope.headers = [];

                return {
                    setHeader: setHeader,
                    changeSorting: changeSorting
                };

                function setHeader(headerElement) {
                    scope.headers.push(headerElement);
                }

                function changeSorting(propertyName) {
                    angular.forEach(scope.headers, function (header) {
                        header.removeClass('twr-sort-asc');
                        header.removeClass('twr-sort-desc');
                    });
                    scope.twrSortingVariable = propertyName;
                }
            }]
        };
    }

    function twrTableSorter() {
        return {
            require: '^twrSortableTable',
            restrict: 'A',
            link: function (scope, element, attrs, tableController) {
                element.bind('click', function () {
                    var propertyName = attrs.twrTableSorter;

                    if (element.hasClass('twr-sort-asc')) {
                        tableController.changeSorting('-' + propertyName);
                        element.addClass('twr-sort-desc');
                        scope.$apply();
                    }
                    else {
                        tableController.changeSorting(propertyName);
                        element.addClass('twr-sort-asc');
                        scope.$apply();
                    }
                });

                tableController.setHeader(element);

                if (attrs.twrTableDefault != null && attrs.twrTableDefault.length >= 0) {
                    tableController.changeSorting(attrs.twrTableSorter);
                    element.addClass('twr-sort-asc');
                }
                element.append('<i class="fa fa-sort"></i><i class="fa fa-sort-desc"></i><i class="fa fa-sort-asc"></i>');
            }
        };
    }
})();
