import {
  Controller,
  Get,
  Patch,
  Delete,
  Post,
  Body,
  Param,
  Res,
  UseInterceptors,
  UploadedFiles,
  StreamableFile,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Response } from 'express';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { FilesInterceptor } from '@nestjs/platform-express';

const fs = require('fs');
const path = require('path');
const mime = require('mime-types');

@Controller('v1/user')
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
  @UseInterceptors(FilesInterceptor('images'))
  async update(
    @Param('id') id: string,
    @Body() data: UpdateUserDto,
    @Res() res: Response,
    @UploadedFiles() files?,
  ) {
    try {
      console.log(data);
      console.log(files);
      // Convertir hasLicense and hasVehicule to boolean

      const user = await this.userService.update(id, data);
      if (files.length > 0) {
        const file = files[0];
        const ext = mime.extension(file.mimetype);
        const fileName = `$${user.username ? user.username : user.id}_img.${ext}`;
        const filePath = path.join(process.cwd(), `/public/${user.id}/`);
        if (!fs.existsSync(filePath)) {
          fs.mkdirSync(filePath, { recursive: true });
        }
        user.image = fileName;
        const newUs = await this.userService.update(user.id, user);
        await fs.writeFileSync(path.join(filePath, fileName), file.buffer);
        return res.status(200).json(newUs);
      }
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Devolver la imagen de un usuario
  @Get(':id/img/:name')
  getImages(
    @Param('id') id: string,
    @Param('name') imageName: string,
    @Res({ passthrough: true }) res: Response,
  ): StreamableFile {
    // res.set({ 'Content-Type': 'image/jpeg' });
    const imagePath = path.join(process.cwd(), `public/${id}/`, imageName);
    const mimeType = mime.lookup(imageName);
    if (!mimeType) {
      return undefined;
    }
    const fileStream = fs.createReadStream(imagePath);
    const streamableFile = new StreamableFile(fileStream);
    streamableFile.options.type = mimeType;
    return streamableFile;
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
