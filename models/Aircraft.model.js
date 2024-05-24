const { Schema, model } = require("mongoose");

const aircraftSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, 'El nombre es obligatorio.'],
            unique: true
        }
    },
    {
        timestamps: true
    }
);

const Aircraft = model("Aircraft", aircraftSchema)

module.exports = Coaster