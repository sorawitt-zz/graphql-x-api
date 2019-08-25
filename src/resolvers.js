import Room from './model/RoomModel'
export default {
  Query: {
    async rooms() {
      return await Room.find();
    },
    async room(root, {
      _id
    }) {
      return await Room.findById(_id);
    },
  },
  Mutation: {
    async createRoom(root, {
      input
    }) {
      return await Room.create(input);
    },

    async updateRoom(root, {
      _id,
      input
    }) {
      return await Room.findOneAndUpdate({
        _id
      }, input, {
        new: true
      })
    },
    async deleteRoom(root, {
      _id
    }) {
      return await Room.findByIdAndRemove(_id)
    }
  }
};