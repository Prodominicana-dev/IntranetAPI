import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  CreateApplicationDto,
  UpdateApplicationDto,
} from './dto/application.dto';
@Injectable()
export class ApplicationService {
  constructor(private readonly primsmaService: PrismaService) {}

  // Crear una aplicación
  async create(data: any) {
    try {
      const application = await this.primsmaService.application.create({
        data,
      });
      return application;
    } catch (error) {
      console.log(error);
      throw new Error('Error al crear la aplicación');
    }
  }

  // Actualizar una aplicación

  async update(id: string, data: any) {
    try {
      const application = await this.primsmaService.application.update({
        where: { id },
        data,
      });
      return application;
    } catch (error) {
      console.log(error);
      throw new Error('Error al actualizar la aplicación');
    }
  }

  // Eliminar una aplicación

  async delete(id: string) {
    try {
      const application = await this.primsmaService.application.delete({
        where: { id },
      });
      return application;
    } catch (error) {
      console.log(error);
      throw new Error('Error al eliminar la aplicación');
    }
  }

  // Obtener todas las aplicaciones

  async getAll() {
    try {
      const applications = await this.primsmaService.application.findMany();
      return applications;
    } catch (error) {
      console.log(error);
      throw new Error('Error al obtener las aplicaciones');
    }
  }

  // Obtener una aplicación por id

  async getById(id: string) {
    try {
      const application = await this.primsmaService.application.findUnique({
        where: { id },
      });
      return application;
    } catch (error) {
      console.log(error);
      throw new Error('Error al obtener la aplicación');
    }
  }

  async approvedUpdate(id: string) {
    try {
      const approved = await this.primsmaService.application.update({
        where: { id },
        data: { status: 'approved' },
      });
      return approved;
    } catch (error) {
      console.log(error);
      throw new Error('Error al actualizar la aprobacion de la  aplicación');
    }
  }

  async dismissedUpdate(id: string) {
    try {
      const dismissed = await this.primsmaService.application.update({
        where: { id },
        data: { status: 'denied' },
      });
      return dismissed;
    } catch (error) {
      console.log(error);
      throw new Error('Error en  actualizar la aprobacion de la aplicación');
    }
  }

  // Obtener todas las aplicaciones de un usuario
  async getAllByUser(userId: string) {
    try {
      const applications = await this.primsmaService.application.findMany({
        where: {
          userId,
        },
        include: { user: true, vacancy: true },
      });
      return applications;
    } catch (error) {
      console.log(error);
      throw new Error('Error al obtener las aplicaciones');
    }
  }

  // Obtener todas las aplicaciones de una vacante
  async getAllByVacancy(vacancyId: string) {
    try {
      const applications = await this.primsmaService.application.findMany({
        where: {
          vacancyId,
        },
        include: {
          user: {
            include: {
              education: {
                include: { degrees: true, careers: true },
                orderBy: [{ endDate: 'desc' }, { startDate: 'desc' }],
              },
              language: { orderBy: { level: 'desc' } },
              personalReference: { orderBy: { createdAt: 'desc' } },
              answers: {
                include: { question: true },
                orderBy: { createdAt: 'desc' },
              },
              workExperience: {
                orderBy: [{ endDate: 'desc' }, { startDate: 'desc' }],
              },
              applications: true,
              professionalReference: { orderBy: { createdAt: 'desc' } },
              relationship: { orderBy: { createdAt: 'desc' } },
              cv: true,
            },
          },
          vacancy: true,
        },
      });
      return applications;
    } catch (error) {
      console.log(error);
      throw new Error('Error al obtener las aplicaciones');
    }
  }
}
