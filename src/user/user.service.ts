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
        data: {
          ...data,
          hasLicense: Boolean(data.hasLicense),
          hasVehicule: Boolean(data.hasVehicule),
        },
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
      console.log(data.hasLicense, data.hasVehicule);
      // convertir de string a boolean el hasLicense y hasVehicule
      const hasLicense = Boolean(data.hasLicense);
      const hasVehicule = Boolean(data.hasVehicule);
      console.log(hasLicense, hasVehicule);
      const user = await this.prisma.user.update({
        where: {
          id,
        },
        data: {
          ...data,
          hasLicense: hasLicense,
          hasVehicule: hasVehicule,
        },
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
          cv: true,
        },
      });
      return user;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
}
