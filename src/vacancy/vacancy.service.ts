import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateVacancyDto, UpdateVacancyDto } from './dto/vacancy.dto';

@Injectable()
export class VacancyService {
  constructor(private readonly prismaService: PrismaService) {}

  // Crear una vacante
  async create(data: any) {
    try {
      const vacancy = await this.prismaService.vacancy.create({
        data,
      });
      return vacancy;
    } catch (error) {
      console.log(error);
      throw new Error('Error al crear la categoría');
    }
  }

  // Actualizar una vacante
  async update(id: string, data: any) {
    try {
      const vacancy = await this.prismaService.vacancy.update({
        where: { id },
        data,
      });
      return vacancy;
    } catch (error) {
      console.log(error);
      throw new Error('Error al actualizar la vacante');
    }
  }

  // Eliminar una vacante
  async delete(id: string) {
    try {
      const vacancy = await this.prismaService.vacancy.delete({
        where: { id },
      });
      return vacancy;
    } catch (error) {
      console.log(error);
      throw new Error('Error al eliminar la vacante');
    }
  }
  // Obtener todas las vacantes

  async getAll() {
    try {
      const vacancies = await this.prismaService.vacancy.findMany({
        include: {
          career: true,
          category: true,
          applications: true,
          degree: true,
          _count: { select: { applications: true } },
        },
      });
      return vacancies;
    } catch (error) {
      console.log(error);
      throw new Error('Error al obtener las vacantes');
    }
  }

  // Obtener una vacante por id

  async getById(id: string) {
    try {
      const vacancy = await this.prismaService.vacancy.findUnique({
        where: { id },
        include: {
          career: true,
          category: true,
          applications: true,
          degree: true,
          _count: { select: { applications: true } },
        },
      });
      return vacancy;
    } catch (error) {
      console.log(error);
      throw new Error('Error al obtener la vacante');
    }
  }
}
