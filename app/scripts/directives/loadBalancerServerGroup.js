'use strict';

require('../app');
var angular = require('angular');

angular.module('deckApp')
  .directive('loadBalancerServerGroup', function ($rootScope) {
    return {
      restrict: 'E',
      templateUrl: 'views/application/loadBalancer/loadBalancerServerGroup.html',
      scope: {
        serverGroup: '=',
        displayOptions: '='
      },
      link: function (scope) {
        scope.$state = $rootScope.$state;
      }
    };
  }
);
