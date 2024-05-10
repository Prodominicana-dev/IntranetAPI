import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { rimraf } from 'rimraf';

const path = require('path');
const fs = require('fs');

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  // Crear un usuario
  async create(data: CreateUserDto) {
    try {
      const user = await this.prisma.user.create({
        data,
      });
      return user;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  // Editar un usuario
  async update(id: string, data: UpdateUserDto) {
    try {
      const user = await this.prisma.user.update({
        where: {
          id,
        },
        data,
      });
      return user;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  // Eliminar un usuario
  async delete(id: string) {
    try {
      const user = await this.prisma.user.delete({
        where: {
          id,
        },
      });

      // Eliminar la carpeta con los documentos y las imagenes del usuario
      const folderPath = path.join(process.cwd(), 'public', 'uploads', id);

      // Revisar si la carpeta existe
      if (fs.existsSync(folderPath)) {
        await rimraf(folderPath);
      }

      return user;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  // Obtener todos los usuarios
  async findAll() {
    try {
      const users = await this.prisma.user.findMany({});
      return users;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  // Obtener un usuario por auth0dId
  async findByAuth0Id(auth0Id: string) {
    try {
      const user = await this.prisma.user.findFirst({
        where: {
          auth0Id,
        },
        include: {
          education: {
            include: { degrees: true },
            orderBy: [{ endDate: 'desc' }, { startDate: 'desc' }],
          },
          language: { orderBy: { level: 'desc' } },
          personalReference: true,
          answers: true,
          workExperience: true,
          applications: true,
          professionalReference: true,
          relationship: true,
        },
      });
      return user;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  // Obtener un usuario por id
  async findById(id: string) {
    try {
      const user = await this.prisma.user.findFirst({
        where: {
          id,
        },
        include: {
          education: true,
          language: true,
          personalReference: true,
          answers: true,
          workExperience: true,
          applications: true,
          professionalReference: true,
          relationship: true,
        },
      });
      return user;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
}
