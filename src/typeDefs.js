  import { gql } from "apollo-server";

  export default gql `
    type Room {
      _id: ID,
      name: String,
      summary: String,
      description: String,
      room_type: String,
      maximum_nights: Int,
      minimum_nights: Int,
      beds: Int,
      accommodates: Int,
      price: Float,
      cleaning_fee: Float
    }
    type Query {
      room(_id: ID!): Room
      rooms: [Room]
    }
    input RoomInput {
      name: String,
      summary: String,
      description: String,
      room_type: String,
      maximum_nights: Int,
      minimum_nights: Int,
      beds: Int,
      accommodates: Int,
      price: Float,
      cleaning_fee: Float
    }
    type Mutation {
      createRoom(input: RoomInput): Room
      updateRoom(_id: ID!, input: RoomInput): Room
      deleteRoom(_id: ID!): Room
    }
  `;