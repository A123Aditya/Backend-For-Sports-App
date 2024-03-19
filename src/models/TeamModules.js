import mongoose from "mongoose";

const TeamSechema = mongoose.Schema({
    TeamName : {
        type : String,
        required : true,
        lowercase : true,
        unique : true,
        index : true
    },
    Players: [{
        type : mongoose.Types.ObjectId,
        ref : "Players"
    }],
    avatar:{
        type : String, // cloudinary url
        required : true
    },
    won : {
        type : Number,
        default : 0
    },
    loose : {
        type : Number,
        default: 0
    }
})

export const Team = mongoose.model("Team",TeamSechema)