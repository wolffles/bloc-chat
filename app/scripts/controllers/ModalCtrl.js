(function() {angular.module('blocChat').controller('ModalCtrl',['Room', '$uibModalInstance','$cookies', 
    function(Room, $uibModalInstance, $cookies) {
        // in both Room.new and modal.user these arnt properties defined anywhere but here 
        // so im suspecting its a property of the object instance in this scope.
        this.makeroom = function() {$uibModalInstance.close(Room.add(this.new))};
        this.makename = function() {$uibModalInstance.close($cookies.put('blocChatCurrentUser', this.user))}
        this.cancel = function() {$uibModalInstance.dismiss(/*'cancel'*/)}
        
        //
    }])
})();