import mongoose, { Schema, Document } from 'mongoose';

export interface IDealer extends Document {
  id: string;
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  city: string;
  state?: string;
  country?: string;
  experienceYears?: number;
  message?: string;
  status: 'PENDING' | 'REVIEWED' | 'ACCEPTED' | 'REJECTED';
  createdAt: Date;
}

const DealerSchema: Schema = new Schema(
  {
    id: { type: String, required: true, unique: true },
    companyName: { type: String, required: true },
    contactPerson: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, default: '' },
    country: { type: String, default: 'India' },
    experienceYears: { type: Number, default: 0 },
    message: { type: String, default: '' },
    status: { type: String, enum: ['PENDING', 'REVIEWED', 'ACCEPTED', 'REJECTED'], default: 'PENDING' },
  },
  { timestamps: true }
);

export default mongoose.models.Dealer || mongoose.model<IDealer>('Dealer', DealerSchema);
