const { Schema, model } = require("mongoose");


const profileSchema = new Schema(
    {

        mobile: {
            type: Number,
            required: true,
        },

        fullname: {
            type: String,
            required: true
        },

        favAirport: {
            type: String,
        },

        specialDiet: {
            enum: ["celiac", "vegetarian", "vegan", "none"]
        },






    },
    {

        timestamps: true
    }
);

module.exports = model("Profile", profileSchema);
