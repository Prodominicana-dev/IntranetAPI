import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CvService {
  constructor(private readonly prismaService: PrismaService) {}

  // Crear un CV
  async create(data) {
    try {
      const cv = await this.prismaService.cV.create({
        data,
      });
      return cv;
    } catch (error) {
      console.log(error);
      throw new Error('Error al crear el CV');
    }
  }

  // Actualizar un CV
  async update(id, data) {
    try {
      const cv = await this.prismaService.cV.update({
        where: { id },
        data,
      });
      return cv;
    } catch (error) {
      console.log(error);
      throw new Error('Error al actualizar el CV');
    }
  }

  // Eliminar un CV
  async delete(id) {
    try {
      const cv = await this.prismaService.cV.delete({
        where: { id },
      });
      return cv;
    } catch (error) {
      console.log(error);
      throw new Error('Error al eliminar el CV');
    }
  }

  // Eliminar todos los CV de un usuario
  async deleteAll(userId) {
    try {
      const cvs = await this.prismaService.cV.findMany({
        where: { userId },
      });
      cvs.forEach(async (cv) => {
        await this.prismaService.cV.delete({ where: { id: cv.id } });
      });
      return cvs;
    } catch (error) {
      console.log(error);
      throw new Error('Error al eliminar los CV');
    }
  }
}
