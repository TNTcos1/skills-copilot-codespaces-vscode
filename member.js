function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'skills-member.html',
        controller:'skillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}