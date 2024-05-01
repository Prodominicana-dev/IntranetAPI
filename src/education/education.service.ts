import { Injectable } from '@nestjs/common';
import { CreateEducationDto, UpdateEducationDto } from './dto/education.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EducationService {
    constructor(private readonly prismaService: PrismaService) {}

    // Crear una educación
    async create(data: CreateEducationDto) {
        try {
            const education = await this.prismaService.education.create({ data });
            return education;
        } catch (error) {
            console.log(error)
            throw new Error('Error al crear la educación');
        }
    }

    // Actualizar una educación
    async update(id: string, data: UpdateEducationDto) {
        try {
            const education = await this.prismaService.education.update({ where: { id }, data });
            return education;
        } catch (error) {
            console.log(error)
            throw new Error('Error al actualizar la educación');
        }
    }

    // Eliminar una educación
    async delete(id: string) {
        try {
            const education = await this.prismaService.education.delete({ where: { id } });
            return education;
        } catch (error) {
            console.log(error)
            throw new Error('Error al eliminar la educación');
        }
    }

    // Obtener todas las educaciones de un usuario
    async getAll(userId: string) {
        try {
            const educations = await this.prismaService.education.findMany({ where: { userId } });
            return educations;
        } catch (error) {
            console.log(error)
            throw new Error('Error al obtener las educaciones');
        }
    }

    // Obtener una educación por id
    async getById(id: string) {
        try {
            const education = await this.prismaService.education.findUnique({ where: { id } });
            return education;
        } catch (error) {
            console.log(error)
            throw new Error('Error al obtener la educación');
        }
    }

    
}
