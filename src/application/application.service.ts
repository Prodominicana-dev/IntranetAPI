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
        data: { status: '' },
      });
      return approved;
    } catch (error) {
      console.log(error);
      throw new Error('Error al actualizar la aprobacion de la  aplicación');
    }
  }

  async approvedGetAll(id: string) {
    try {
      const approved = await this.primsmaService.application.findMany({
        where: { userId: id },
      });
      return approved;
    } catch (error) {
      console.log(error);
      throw new Error(
        'Error en obtener las  aprobaciones de las Aplicaciones ',
      );
    }
  }

  async approvedGetById(id: string) {
    try {
      const approved = await this.primsmaService.application.findUnique({
        where: { id },
      });
      return approved;
    } catch (error) {
      console.log(error);
      throw new Error('Error en obtener la aprobarcion de  la aplicación');
    }
  }

  async dismissedUpdate(id: string) {
    try {
      const dismissed = await this.primsmaService.application.update({
        where: { id },
        data: { status: '' },
      });
      return dismissed;
    } catch (error) {
      console.log(error);
      throw new Error('Error en  actualizar la aprobacion de la aplicación');
    }
  }

  async dismissedGetAll(id: string) {
    try {
      const dismissed = await this.primsmaService.application.findMany({
        where: { userId: id },
      });
      return dismissed;
    } catch (error) {
      console.log(error);
      throw new Error('Error al rechazo  de las Aplicaciones');
    }
  }

  async dismissedGetById(id: string) {
    try {
      const demissed = await this.primsmaService.application.findUnique({
        where: { id },
      });
      return demissed;
    } catch (error) {
      console.log(error);
      throw new Error('Error al rechazo de la aplicación');
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
        include: { user: true, vacancy: true },
      });
      return applications;
    } catch (error) {
      console.log(error);
      throw new Error('Error al obtener las aplicaciones');
    }
  }
}
