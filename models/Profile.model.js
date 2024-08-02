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
            type: String,
            enum: ["celiac", "vegetarian", "vegan", "none", "halal"]
        },
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
