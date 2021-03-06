(function(){
    function HomeCtrl(Room, Message, $uibModal, $cookies) {
        this.rooms = Room.all
        this.currentUser = $cookies.get('blocChatCurrentUser')
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
        
        this.deleteroom = function() {
            Room.delete(this.currentRoom)
        };
    
        this.sendMessage = function () {
            this.newMessage.roomID = this.currentRoom.$id;
            this.newMessage.username = this.currentUser;
            this.newMessage.sentAt = firebase.database.ServerValue.TIMESTAMP;
            Message.send(this.newMessage);
            this.newMessage.content = this.newMessage.placeholder;
        }
        
        
         };
        
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
})();