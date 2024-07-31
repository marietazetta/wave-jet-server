const { Schema, model } = require("mongoose");


const profileSchema = new Schema(
    {

        mobile: {
            type: Number,

        },

        fullName: {
            type: String,

        },

        favAirport: {
            type: String,
        },

        specialDiet: {
            enum: ["celiac", "vegetarian", "vegan", "none", "halal"]
        },

        userId: [{
            type: Schema.Types.ObjectId,
            ref: "User"
        }],

        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },


    },
    {

        timestamps: true
    }
);

module.exports = model("Profile", profileSchema);