import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
    {
        orderId: {
            type: String,
            required: true,
            unique: true
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        customer: {
            type: String,
            required: true
        },
        email: {
            type: String,
            // required: true
        },
        phone: {
            type: String,
            required: true
        },
        service: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        status: {
            type: String,
            enum: ['Pending', 'In Progress', 'Completed', 'Cancelled'],
            required: true,
            default: 'Pending'
        },
        address: {
            type: String,
            required: true
        },
        paymentMethod: {
            type: String,
            enum: ['Pay Online', 'COD'],
            required: true,
            default: 'COD'
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Order = mongoose.model('Order', orderSchema);
export default Order;
