import mongoose from 'mongoose';

const Schema = mongoose.Schema

const roomSchema = new Schema({
  name: { type: String },
  summary: { type: String },
  description: { type: String },
  room_type: { type: String },
  maximum_nights: { type: Number },
  minimum_nights: { type: Number },
  beds: { type: Number },
  accommodates: { type: Number },
  price: { type: Number },
  cleaning_fee: { type: Number }
})

const Room = mongoose.model('rooms', roomSchema,'rooms')

export default Room

