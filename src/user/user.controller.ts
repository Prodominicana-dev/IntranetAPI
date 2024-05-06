import {
  Controller,
  Get,
  Patch,
  Delete,
  Post,
  Body,
  Param,
  Res,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Response } from 'express';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Crear un usuario
  @Post()
  async create(@Body() data: CreateUserDto, @Res() res: Response) {
    try {
      const user = await this.userService.create(data);
      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Editar un usuario
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateUserDto,
    @Res() res: Response,
  ) {
    try {
      console.log(data);
      const user = await this.userService.update(id, data);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Eliminar un usuario
  @Delete(':id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    try {
      const user = await this.userService.delete(id);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Obtener todos los usuarios
  @Get()
  async findAll(@Res() res: Response) {
    try {
      const users = await this.userService.findAll();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Obtener un usuario por id
  @Get(':id')
  async findById(@Param('id') id: string, @Res() res: Response) {
    try {
      const user = await this.userService.findById(id);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Obtener un usuario por auth0Id
  @Get('a/:auth0Id')
  async findByAuth0Id(@Param('auth0Id') auth0Id: string, @Res() res: Response) {
    try {
      const user = await this.userService.findByAuth0Id(auth0Id);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
