import { Injectable } from '@nestjs/common';
import {PrismaService }from 'src/prisma/prisma.service'
import {CreateCarreersDto, UpdateCarreersDto} from './dto/carriers .dto'

@Injectable()
export class CarreersService {
 
 constructor(private readonly prismaService: PrismaService) {}
  // Crear una carrera
 async create(data: CreateCarreersDto) {
    try {
      const carreer = await this.prismaService.carreers.create({
        data,
      });
      return carreer;
    } catch (error) {
      console.log(error);
      throw new Error('Error al crear la carrera');
    }
 
 }

 // Actualizar una carrera
 async update(id: string, data: UpdateCarreersDto) {

     try {
       const carreer = await this.prismaService.carreers.update({
         where: { id },
         data,
       });
       return carreer;
     } catch (error) {
       console.log(error);
       throw new Error('Error al actualizar la carrera');
     }
  }

  // Eliminar una carrera
  async delete(id: string) {
    try {
      const carreer = await this.prismaService.carreers.delete({
        where: { id },
      });
      return carreer;
    } catch (error) {
      console.log(error);
      throw new Error('Error al eliminar la carrera');
    }
  }

  async getAll() {
    try {
      const carreers = await this.prismaService.carreers.findMany();
      return carreers;
    } catch (error) {
      console.log(error);
      throw new Error('Error al obtener las carreras');
    }

  }

  async getById(id: string) {
    try {
      const carreer = await this.prismaService.carreers.findUnique({
        where: { id },
      });
      return carreer;
    } catch (error) {
      console.log(error);
      throw new Error('Error al obtener la carrera');
    }
  }

}
