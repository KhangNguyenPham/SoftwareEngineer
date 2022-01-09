import mongoose  from 'mongoose'

const schema = new mongoose.Schema(
    {
        content:{
            type: String
        }
    },
    {
        timestamps: true
    }
)

export const testModel = mongoose.model('test', schema)

