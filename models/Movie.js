const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Actor = require('./Actor');

const actorRoleSchema = new Schema({
    actor: { type: Schema.Types.ObjectId, ref: 'Actor', required: true },
    role: { type: String, required: true }
});

const movieSchema = new Schema({
    title: { type: String, required: true },
    synopsis: { type: String, required: true },
    plot: { type: String, required: true },
    actors: [actorRoleSchema],
    releaseDate: { type: Date, required: true },
    rating: { type: Number, required: true },
    reviews: { type: Number, required: true },
    landscapeImage: { type: String, required: true },
    portraitImage: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Movie', movieSchema);