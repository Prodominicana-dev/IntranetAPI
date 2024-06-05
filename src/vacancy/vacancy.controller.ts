import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateVacancyDto, UpdateVacancyDto } from './dto/vacancy.dto';
import { VacancyService } from './vacancy.service';
@Controller('v1/vacancy')
export class VacancyController {
  constructor(private readonly vacancyService: VacancyService) {}

  // Crear una vacante
  @Post()
  async create(@Body() data: any, @Res() res: Response) {
    try {
      console.log(data);
      // Convertir hasLicense y hasVehicule a boolean
      data.hasLicense = data.hasLicense === 'true' ? true : false;
      data.hasVehicule = data.hasVehicule === 'true' ? true : false;
      // Si la edad es diferente a 'cualquiera' convertir a número
      if (data.age !== 'cualquiera') {
        data.age = parseInt(data.age);
      } else {
        data.age = null;
      }
      data.careerId === 'cualquiera' ? (data.careerId = null) : data.careerId;
      // Convertir language a JSON.parse
      //data.language = JSON.parse(data.language);
      const vacancy = await this.vacancyService.create(data);
      console.log(vacancy);
      return res.status(201).json(vacancy);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }

  // Editar una vacante
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() data: any,
    @Res() res: Response,
  ) {
    try {
      // Convertir hasLicense y hasVehicule a boolean
      data.hasLicense = data.hasLicense === 'true' ? true : false;
      data.hasVehicule = data.hasVehicule === 'true' ? true : false;
      // Si la edad es diferente a 'cualquiera' convertir a número
      if (data.age !== 'cualquiera') {
        data.age = parseInt(data.age);
      } else {
        data.age = null;
      }
      data.careerId === 'cualquiera' ? (data.careerId = null) : data.careerId;
      // Convertir language a JSON.parse
      //data.language = JSON.parse(data.language);
      const vacancy = await this.vacancyService.update(id, data);
      return res.status(200).json(vacancy);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Eliminar una vacante
  @Delete(':id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    try {
      const vacancy = await this.vacancyService.delete(id);
      return res.status(200).json(vacancy);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Obtener todas las vacantes
  @Get()
  async getAll(@Res() res: Response) {
    try {
      const vacancy = await this.vacancyService.getAll();
      return res.status(200).json(vacancy);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Obtener una vacante
  @Get(':id')
  async getById(@Param('id') id: string, @Res() res: Response) {
    try {
      const vacancy = await this.vacancyService.getById(id);
      return res.status(200).json(vacancy);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Validar si el usuario ya aplico a la vacante
  @Get(':id/apply/:userId')
  async userApplied(
    @Param('userId') userId: string,
    @Param('id') vacancyId: string,
    @Res() res: Response,
  ) {
    try {
      const applied = await this.vacancyService.userApplied(userId, vacancyId);
      return res.status(200).json(applied);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
