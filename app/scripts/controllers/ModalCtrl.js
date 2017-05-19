(function() {angular.module('blocChat').controller('ModalCtrl',['Room', '$uibModalInstance','$cookies', 
    function(Room, $uibModalInstance, $cookies) {
        // in both Room.new and modal.user defined in the html via ng-model
        this.makeroom = function() {$uibModalInstance.close(Room.add(this.new))};
        this.makename = function() {$uibModalInstance.close($cookies.put('blocChatCurrentUser', this.user));
                                    console.log(this.user)
                                    console.log($cookies.get('blocChatCurrentUser'))
                                   }
        this.cancel = function() {$uibModalInstance.dismiss(/*'cancel'*/)}
        
        //
    }])
})();