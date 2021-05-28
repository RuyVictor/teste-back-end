import {
  Controller,
  Get,
  Res,
  Post,
  HttpCode,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { ApiResponse } from '@nestjs/swagger';
import { Response } from 'express';


@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post("create")
  @HttpCode(201)
  @ApiResponse({ status: 201, description: 'User has been successfully created.'})
  create(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    const createdUser = this.usersService.create(createUserDto);
    if (createdUser) {
      res.status(201).json({message: 'User has been successfully created.'});
    }
  }

  @Get("find")
  findAll() {
    return this.usersService.findAll();
  }

  @Get("find/:id")
  @ApiResponse({ status: 404, description: 'User not found'})
  findOne(@Param("id") id: string) {
    return this.usersService.findOne(id);
  }

  @Patch("update/:id")
  @ApiResponse({ status: 200, description: 'User has been successfully updated.'})
  @ApiResponse({ status: 404, description: 'User not found'})
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto, @Res() res: Response) {
    const updatedUser = this.usersService.update(id, updateUserDto);
    if (updatedUser) {
      res.status(200).json({message: 'User has been successfully updated.'});
    }
  }

  @Delete("delete/:id")
  @ApiResponse({ status: 200, description: 'User has been successfully deleted.'})
  @ApiResponse({ status: 404, description: 'User not found'})
  remove(@Param("id") id: string, @Res() res: Response) {
    const deletedUser = this.usersService.remove(id);
    if (deletedUser) {
      res.status(200).json({message: 'User has been successfully deleted.'});
    }
  }
}
