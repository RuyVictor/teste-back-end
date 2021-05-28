import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./create-user.dto";
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({required: false})
  readonly name: string;
  @ApiProperty({required: false})
  readonly age: number;
  @ApiProperty({required: false})
  readonly email: string;
  @ApiProperty({required: false})
  readonly phone: number;
  @ApiProperty({required: false})
  readonly address: string;
  @ApiProperty({required: false})
  readonly password: string;
  @ApiProperty({required: false})
  avatar: string;
  @ApiProperty({required: false})
  description: string;
  @ApiProperty({required: false})
  premium: boolean;
  @ApiProperty({ enum: ['User', 'Admin', 'Moderator'], required: false})
  readonly role: string;
  @ApiProperty({required: false})
  readonly updated_at: Date;
}
