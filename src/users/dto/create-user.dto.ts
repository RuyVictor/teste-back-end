import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({required: true})
  readonly name: string;
  @ApiProperty({required: true})
  readonly age: number;
  @ApiProperty({required: true})
  readonly email: string;
  @ApiProperty({required: true})
  readonly phone: number;
  @ApiProperty({required: true})
  readonly address: string;
  @ApiProperty({required: true})
  readonly password: string;
  @ApiProperty({ required: false, default: "https://e7.pngegg.com/pngimages/109/994/png-clipart-teacher-student-college-school-education-avatars-child-face-thumbnail.png" })
  avatar: string;
  @ApiProperty({ required: false })
  description: string;
  @ApiProperty({ required: false, default: false })
  premium: boolean;
  @ApiProperty({ enum: ['User', 'Admin', 'Moderator'], required: false, default: 'User'})
  readonly role: string;
  @ApiProperty({required: false})
  readonly created_at: Date;
  @ApiProperty({required: false})
  readonly updated_at: Date;
}
