import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Res,
} from '@nestjs/common';
import { CreateLanguageDto, UpdateLanguageDto } from './dto/language.dto';
import { Response } from 'express';
import { LanguageService } from './language.service';

@Controller('v1/language')
export class LanguageController {
  constructor(private readonly languageService: LanguageService) {}

  // Crear un idioma
  @Post()
  async create(@Body() data: CreateLanguageDto, @Res() res: Response) {
    try {
      const language = await this.languageService.create(data);
      return res.status(201).json(language);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  // Actualizar un idioma
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateLanguageDto,
    @Res() res: Response,
  ) {
    try {
      const language = await this.languageService.update(id, data);
      return res.status(200).json(language);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  // Eliminar un idioma
  @Delete(':id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    try {
      const language = await this.languageService.delete(id);
      return res.status(200).json(language);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  // Obtener todos los idiomas de un usuario
  @Get('u/:userId')
  async getAll(@Param('userId') userId: string, @Res() res: Response) {
    try {
      const languages = await this.languageService.getAll(userId);
      return res.status(200).json(languages);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  // Obtener un idioma por id
  @Get(':id')
  async getById(@Param('id') id: string, @Res() res: Response) {
    try {
      const language = await this.languageService.getById(id);
      return res.status(200).json(language);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}
