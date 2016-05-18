var app = angular.module('plunker', ['ngSanitize', 'ui.bootstrap']);

app.controller('MainCtrl', function ($scope, filterFilter) {
  $scope.selectedUser = '';

  var users = [{
      name: 'Test user1',
      group: 'cat'
    }, {
      name: 'Test user2',
      group: 'cat'
    }, {
      name: 'Test user3',
      group: 'cat'
    }, {
      name: 'Test user1',
      group: 'course'
    }, {
      name: 'Test user3',
      group: 'course'
    },
  ];

  $scope.getUsers = function (search) {
    var filtered = filterFilter(users, search);

    var results = _(filtered)
      .groupBy('group')
      .map(function (g) {
        g[0].firstInGroup = true;  // the first item in each group
        return g;
      })
      .flatten()
      .value();

    console.log(results);

    return results;
  }
});
