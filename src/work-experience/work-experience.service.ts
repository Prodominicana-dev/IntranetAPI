import { Injectable } from '@nestjs/common';
import { CreateWorkExperienceDto, UpdateWorkExperienceDto } from './dto/work-experience.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WorkExperienceService {
    constructor(private readonly prismaService: PrismaService) { }

    // Crear una experiencia laboral
    async create(data: CreateWorkExperienceDto) {
        try {
            const workExperience = await this.prismaService.workExperience.create({ data });
            return workExperience;
        } catch (error) {
            console.log(error)
            throw new Error('Error al crear la experiencia laboral');
        }
    }

    // Actualizar una experiencia laboral
    async update(id: string, data: UpdateWorkExperienceDto) {
        try {
            const workExperience = await this.prismaService.workExperience.update({ where: { id }, data });
            return workExperience;
        } catch (error) {
            console.log(error)
            throw new Error('Error al actualizar la experiencia laboral');
        }
    }

    // Eliminar una experiencia laboral
    async delete(id: string) {
        try {
            const workExperience = await this.prismaService.workExperience.delete({ where: { id } });
            return workExperience;
        } catch (error) {
            console.log(error)
            throw new Error('Error al eliminar la experiencia laboral');
        }
    }

    // Obtener todas las experiencias laborales de un usuario
    async getAll(userId: string) {
        try {
            const workExperiences = await this.prismaService.workExperience.findMany({ where: { userId } });
            return workExperiences;
        } catch (error) {
            console.log(error)
            throw new Error('Error al obtener las experiencias laborales');
        }
    }

    // Obtener una experiencia laboral por id
    async getById(id: string) {
        try {
            const workExperience = await this.prismaService.workExperience.findUnique({ where: { id } });
            return workExperience;
        } catch (error) {
            console.log(error)
            throw new Error('Error al obtener la experiencia laboral');
        }
    }
}
