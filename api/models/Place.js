const mongoose=require('mongoose');

const placeShema=new mongoose.Schema({
    owner:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    title:String,
    adress:String,
    photos:[String],
    description:String,
    perks:[String],
    extraInfo:String,
    chekIn:Number,
    checkOut:Number,
    maxGuests:Number,
    price:Number,
})

 const PlaceModel=mongoose.model('Place',placeShema);
 module.exports=PlaceModel;