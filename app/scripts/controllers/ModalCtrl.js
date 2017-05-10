(function() {angular.module('blocChat').controller('ModalCtrl',['Room', '$uibModalInstance', 
    function(Room, $uibModalInstance) {
        
        this.confirm = function() {$uibModalInstance.close(Room.add(this.new))}
        this.cancel = function() {$uibModalInstance.dismiss(/*'cancel'*/)}
        
        
    }])
})();