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

import { NotFoundException } from "../errors/not-found.exception";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post("create")
  @HttpCode(201)
  @ApiResponse({ status: 201, description: 'User has been successfully created.'})
  async create(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    const createdUser = await this.usersService.create(createUserDto);

    if (!createdUser) {
      throw new NotFoundException;
    }

    return res.status(201).json({message: 'User has been successfully created.'});
  }

  @Get("find")
  async findAll() {
    return await this.usersService.findAll();
  }

  @Get("find/:id")
  @ApiResponse({ status: 404, description: 'User not found'})
  async findOne(@Param("id") id: string) {

    const foundUser = await this.usersService.findOne(id);

    if (!foundUser) {
      throw new NotFoundException;
    }

    return foundUser;
  }

  @Patch("update/:id")
  @ApiResponse({ status: 200, description: 'User has been successfully updated.'})
  @ApiResponse({ status: 404, description: 'User not found'})
  async update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto, @Res() res: Response) {
    const updatedUser = await this.usersService.update(id, updateUserDto);
    
    if (!updatedUser) {
      throw new NotFoundException;
    }

    return res.status(200).json({message: 'User has been successfully updated.'});
  }

  @Delete("delete/:id")
  @ApiResponse({ status: 200, description: 'User has been successfully deleted.'})
  @ApiResponse({ status: 404, description: 'User not found'})
  async remove(@Param("id") id: string, @Res() res: Response) {
    const deletedUser = await this.usersService.remove(id);
    
    if (!deletedUser) {
      throw new NotFoundException;
    }
    
    return res.status(200).json({message: 'User has been successfully deleted.'});
  }
}
