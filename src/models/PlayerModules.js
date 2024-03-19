import mongoose from "mongoose";

const PlayerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    maxRuns: {
        type: Number,
        default: 0
    },
    centuries: {
        type: Number,
        default: 0
    },
    halfCenturies: {
        type: Number,
        default: 0
    },
    wickets: {
        type: Number,
        default: 0
    },
    image: {
        type: String, // cloudinary url
        required: true 
    }
});

export const Player = mongoose.model("Player", PlayerSchema);
