const mongo = require('mongodb').MongoClient;
const io = require('socket.io').listen(4000).sockets;
var clients = {};
// Connect to mongo
mongo.connect('mongodb://127.0.0.1/mongochat', function(err, db){
    if(err){
        throw err;
    }

    console.log('MongoDB connected...');
    let block = db.collection('Block');
    // Connect to Socket.io
    io.on('connection', function(client){
        
        


        let chat = db.collection('chats');
        
        let name, message, to;
        let person;

        // Create function to send status
        sendStatus = function(s){
            client.emit('status', s);
        }
        blockStatus = function(s){
            console.log("blockValue"+s);
            client.emit('blockValue', s);
        }
        client.on('block', function(data){
            console.log("changed");
            console.log(data.sender);
            console.log(data.receiver);
            block.findOneAndUpdate({sender: data.sender, receiver:data.receiver}, { $set:
                {
                  status: "blocked"
                }
             },function(err, doc){
                if(err){
                    console.log("Something wrong when updating data!");
                }
                blockStatus("UnBlock");
                console.log(doc);
            });
        });

        client.on('UnBlock', function(data){
            console.log("inside UnBLock");
            block.findOneAndUpdate({sender: data.sender, receiver:data.receiver}, { $set:
                {
                  status: "not blocked"
                }
             },function(err, doc){
                if(err){
                    console.log("Something wrong when updating data!");
                }
                blockStatus("Block");
                console.log(doc);
            });
        });
        client.on('add-user', function(data){
            var found=0;
            clients[client.id]=data;
    
            console.log(client.id);
            // for(var key in clients)
            // {
            //     if(clients[key].name !== data.name){
            //         io.sockets.connected[key].emit('other-online', null);
            //         io.sockets.connected[client.id].emit('other-online', null);
            //     }
            // }
            console.log(data.name);
            person=data.name;
            console.log(person);
            chat.find({to:person}).limit(100).sort({_id:1}).toArray(function(err, res){
                if(err){
                    throw err;
                }
    
                // Emit the messages
                client.emit('output', res);
            });
        });
        // Get chats from mongo collection
        chat.find({to:person}).limit(100).sort({_id:1}).toArray(function(err, res){
            if(err){
                throw err;
            }

            // Emit the messages
            client.emit('output', res);
        });
        // Handle input events
        client.on('input', function(data){
            sender = data.name;
            rec = data.to;
            console.log("just outside");
            var a_1;
            block.findOne({sender: data.name,receiver:data.to}, function(err, user){
                if(err) throw err;
                console.log("************")
                console.log(user);
                if (user == null)
                {
                    block.insert({sender: sender, receiver: rec, status: "not Blocked"});
                }
                else if (user.status=="blocked")
                {
                    console.log("you are blocked")
                    sendStatus('You blocked '+data.to+', Please unblock to send the message');
                }
                else{

                
                name = data.name;
                message = data.message;
                to = data.to;

                // Check for name and message
                if(name == '' || message == '' || to == ''){
                    // Send error status
                    sendStatus('Please enter a name and message');
                } else {
                    // Insert message
                    chat.insert({name: name, message: message, to: to}, function(){
                        io.emit('output', [data]);

                        // Send status object
                        sendStatus({
                            message: 'Message sent',
                            clear: true
                        });
                    });
                }
                }
            });
            //console.log("................");
            //console.log(a_1);
            //console.log("................");
            //if (!block.find({sender:sender ,receiver: rec}))
            //{   
                //console.log("just inside");
                //block.insert({sender: sender, receiver: rec, status: "not Blocked"});
            //}
            //console.log("came out");
            
        });

        // Handle clear
        client.on('clear', function(data){
            // Remove all chats from collection
            console.log("clearing chat");
            chat.deleteMany({ name:data.name, to:data.to} , function(err, user){
            if(err) throw err;
            
            console.log(user);
            sendStatus('Chat cleared');
            client.emit('cleared');
        });
        });
    });
});