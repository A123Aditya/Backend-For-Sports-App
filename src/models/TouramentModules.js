import mongoose from "mongoose";

const TournamentSchema = mongoose.Schema({
    name: { type: String, required: true },
    startDate: Date,
    endDate: Date,
    teams: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team' }],
    matches: [{
        team1: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
        team2: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
        date: { type: Date, required: true }, 
        venue: String,
        result: String 
    }],
    imageUrl: String
})

export const Tournament = mongoose.model("Tournament", TournamentSchema)