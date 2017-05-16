(function() {angular.module('blocChat').run(['$cookies', '$uibModal',  
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            $uibModal.open({
                templateUrl: '/templates/signin.html',
                size:'sm',
                controller: 'ModalCtrl as modal',
                keyboard: false,
                backdrop: 'static'
            });
        }
    } ])
})();