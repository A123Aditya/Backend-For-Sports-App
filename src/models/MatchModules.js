import mongoose from "mongoose";

const MatchSchema = mongoose.Schema({
    Team1 : {
        type : String,
        unique : true
    },
    Team2 : {
        type : String,
        unique : true
    }
},
{
    timeStamps : true
}
)

export const Match = mongoose.model("Match",MatchSchema)