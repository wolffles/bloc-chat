(function(){
    function HomeCtrl(Room, Message, $uibModal) {
        this.rooms = Room.all
        console.log(this);
        
        this.setCurrentRoom = function(room){
            this.currentRoom = room;
            console.log(this.currentRoom);
            this.messages = Message.getByRoomID(this.currentRoom.$id);
            console.log('this is the messages array')
            console.log(this.messages)
        };
        
        
        this.addRoom = function(){
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                size: 'sm',
                controller: 'ModalCtrl as modal'
                });
            }
        };
        
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();