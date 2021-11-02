const mongoose = require('mongoose')


mongoose.connect(`mongodb://localhost:27017/mongoose-mail` , 
{ useNewUrlParser: true, useUnifiedTopology: true } )
  .then(() => {
    console.log('Database connection successful')
  })
  .catch(err => {
    console.error('Database connection error')
  })


  let emailSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      
    },
    user : {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      
    }
  })

  let EmailModel = mongoose.model('Email', emailSchema);

  /*
 let msg = new EmailModel({
  email: 'rockyjagtiani1@gmail.com',
  user: 'chitransh'
 })

 msg.save()
    .then(doc => {
    console.log(doc)
  })
    .catch(err => {
    console.error(err)
   }) */

   /*
   EmailModel.find({
    email: 'rockyjagtiani@gmail.com' 
    // search query
    })
    .then(doc => {
    console.log(doc)
    })
    .catch(err => {
    console.error(err)
    }) */

/*
    EmailModel.findOneAndUpdate({ 
      email: 'rockyjagtiani@gmail.com' 
      // search query
      }, 
      { 
      email: 'superhero@gmail.com' 
      // field:values to update
      },
      {
      new: true,
      useFindAndModify : false   // return updated doc
     // runValidators: true // validate before update
      }
     )
     .then(doc => {
      console.log(doc)
    })
    .catch(err => {
      console.error(err)
    }) */

/*
    EmailModel.updateMany(
    {email: 'superhero@gmail.com'},                      // search query
      {user:"updatedmanyyyy"}                    // what to update
      ) .then(doc => {
          console.log(doc)
        })
        .catch(err => {
          console.error(err)
        }) */

        /*
        EmailModel.findOneAndRemove({
          user:"updatedmanyyyy"
         })
         .then(doc => {
          console.log(doc)
         })
         .catch(err => {
          console.error(err)
         })  */