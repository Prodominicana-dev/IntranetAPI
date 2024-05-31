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
import {
  CreatePersonalReferenceDto,
  UpdatePersonalReferenceDto,
} from './dto/personal-reference.dto';
import { Response } from 'express';
import { PersonalReferenceService } from './personal-reference.service';

@Controller('v1/personal-reference')
export class PersonalReferenceController {
  constructor(
    private readonly personalReferenceService: PersonalReferenceService,
  ) {}

  // Crear una referencia personal
  @Post()
  async create(@Body() data: CreatePersonalReferenceDto, @Res() res: Response) {
    try {
      const personalReference =
        await this.personalReferenceService.create(data);
      return res.status(201).json(personalReference);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  // Actualizar una referencia personal
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdatePersonalReferenceDto,
    @Res() res: Response,
  ) {
    try {
      const personalReference = await this.personalReferenceService.update(
        id,
        data,
      );
      return res.status(200).json(personalReference);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  // Eliminar una referencia personal
  @Delete(':id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    try {
      const personalReference = await this.personalReferenceService.delete(id);
      return res.status(200).json(personalReference);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  // Obtener todas las referencias personales de un usuario
  @Get('u/:userId')
  async getAll(@Param('userId') userId: string, @Res() res: Response) {
    try {
      const personalReferences =
        await this.personalReferenceService.getAll(userId);
      return res.status(200).json(personalReferences);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  // Obtener una referencia personal por id
  @Get(':id')
  async getById(@Param('id') id: string, @Res() res: Response) {
    try {
      const personalReference = await this.personalReferenceService.getById(id);
      return res.status(200).json(personalReference);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}
