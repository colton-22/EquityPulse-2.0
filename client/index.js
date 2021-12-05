const mongoose = require ('mongoose');
const io = require ('socket.io')(process.env.PORT || 3001, {
    cors: {
      origin: '*',
    }
  });

require('dotenv/config');


mongoose.connect(process.env.DB_CONNECTION, (err, db) => 
    {
        console.log('Succesfully connected to MongoDB');

        io.on('connection', (socket) => {

            var EPdata = db.collection('info');
            var futures = db.collection('futures');
            var options = db.collection('options');

            options.find().limit(100).sort({_id:1}).toArray((err,res) => {
                if (err){
                    throw err;
                }
                socket.emit('options', res);
            })



            EPdata.find().limit(100).sort({_id:1}).toArray((err,res) => {
                if (err){
                    throw err;
                }
                socket.emit('output', res);
            })

            futures.find().limit(100).sort({_id:1}).toArray((err,res) => {
                if (err){
                    throw err;
                }
                socket.emit('futures', res);
            })

            const changeStream = EPdata.watch();
            const FutureschangeStream = futures.watch();
            const OptionschangeStream = options.watch();

            OptionschangeStream.on('change', next => {

                console.log('change')
 
                options.find().limit(1).sort({_id:-1}).toArray((err,res) => {
                    if (err){
                        throw err;
                    }
                    socket.emit('options', res);
                })

        });


            FutureschangeStream.on('change', next => {

                console.log('change')

                futures.find().limit(1).sort({_id:-1}).toArray((err,res) => {
                    if (err){
                        throw err;
                    }
                    socket.emit('futures', res);
                })

        });


            changeStream.on('change', next => {

                console.log('change')

                EPdata.find().limit(1).sort({_id:-1}).toArray((err,res) => {
                    if (err){
                        throw err;
                    }
                    socket.emit('output', res);
                })

        });

    });
    
});