const mongoose = require('mongoose');

const DoubleshareSchema = new mongoose.Schema({
    date: { type: String, required: true },
    status: { type: String, required: true },
    room_number: { type: Number, required: true },
    floor_number: { type: Number, required: true },
    price: { type: Number, required: true },
    room_img: { type: String, required: true },
    due_date: { type: String, required: true },
}, {
    timestamps: true,
});

const Doubleshare = mongoose.model('Doubleshare', DoubleshareSchema);

module.exports =Doubleshare;
