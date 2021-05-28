import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
	timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
})
export class User extends Document {
	@Prop({ required: true })
	name: string;

	@Prop({ required: true })
	age: number;

	@Prop({ unique: true, required: true })
	email: string;

	@Prop({ required: true })
	phone: number;

	@Prop({ required: true })
	address: string;

	@Prop({ required: true })
	password: string;

	@Prop({
		required: false,
		default:
			'https://e7.pngegg.com/pngimages/109/994/png-clipart-teacher-student-college-school-education-avatars-child-face-thumbnail.png',
	})
	avatar: string;

	@Prop({ required: false })
	description: string;

	@Prop({ required: false, default: false })
	premium: boolean;

	@Prop({ required: false, default: 'User' })
	role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
