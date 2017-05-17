(function(){
    angular
        .module('blocChat')
        .factory('Message',['$firebaseArray', function($firebaseArray){
            var Message = {};
            var ref = firebase.database().ref().child("messages");
            var messages = $firebaseArray(ref);
            
            Message.getByRoomID = function(roomID) {
                return $firebaseArray(ref.orderByChild('roomID').equalTo(roomID));
            };
            
            Message.send = function (newMessage) {
                messages.$add(newMessage);
                newMessage.sentAt = firebase.database.ServerValue.TIMESTAMP;
        }
        
            
            return Message;
        }]);
})()