const Booking = require('../../models/booking');
const Event = require('../../models/event')
const mongoose = require('mongoose');
const { transformBooking, transformEvent } = require('./merge');

module.exports = {

  bookingsPerUser: async (args,req) =>{
    if(!req.isAuth){
      throw new Error("Unauthenticated!");
    }
    try{
      let bookings = await Booking.find({user:args.userId})
      return bookings.map(booking => {
        return transformBooking(booking);
      });
    }catch(err){
      console.log(err);
    }
  },

  bookings: async (args, req) => {
    if (!req.isAuth) {
      throw new Error('Unauthenticated!');
    }
    try {
      const bookings = await Booking.find();
      return bookings.map(booking => {
        return transformBooking(booking);
      });
    } catch (err) {
      throw err;
    }
  },
  bookEvent: async (args, req) => {
    if (!req.isAuth) {
      throw new Error('Unauthenticated!');
    }
    try{
      console.log(mongoose.Types.ObjectId.isValid(args.eventId))
      const fetchedEvent = await Event.findById(args.eventId);
      const booking = new Booking({
        user: req.userId,
        event: fetchedEvent
      });
      const result = await booking.save();
      return transformBooking(result);
    }
    catch(err){
      console.log(err)
    }

  },
  cancelBooking: async (args, req) => {
    if (!req.isAuth) {
      throw new Error('Unauthenticated!');
    }
    try {
      const booking = await Booking.findById(args.bookingId).populate('event');
      const event = transformEvent(booking.event);
      await Booking.remove({ _id: args.bookingId });
      return event;
    } catch (err) {
      throw err;
    }
  }
};
