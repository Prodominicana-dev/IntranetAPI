import { Injectable } from '@nestjs/common';
import { CreatePersonalReferenceDto, UpdatePersonalReferenceDto } from './dto/personal-reference.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PersonalReferenceService {
    constructor(private readonly prismaService: PrismaService) {}

    // Crear una referencia personal
    async create(data: CreatePersonalReferenceDto) {
        try {
            const personalReference = await this.prismaService.personalReference.create({ data });
            return personalReference;
        } catch (error) {
            console.log(error)
            throw new Error('Error al crear la referencia personal');
        }
    }

    // Actualizar una referencia personal
    async update(id: string, data: UpdatePersonalReferenceDto) {
        try {
            const personalReference = await this.prismaService.personalReference.update({ where: { id }, data });
            return personalReference;
        } catch (error) {
            console.log(error)
            throw new Error('Error al actualizar la referencia personal');
        }
    }

    // Eliminar una referencia personal
    async delete(id: string) {
        try {
            const personalReference = await this.prismaService.personalReference.delete({ where: { id } });
            return personalReference;
        } catch (error) {
            console.log(error)
            throw new Error('Error al eliminar la referencia personal');
        }
    }

    // Obtener todas las referencias personales de un usuario
    async getAll(userId: string) {
        try {
            const personalReferences = await this.prismaService.personalReference.findMany({ where: { userId } });
            return personalReferences;
        } catch (error) {
            console.log(error)
            throw new Error('Error al obtener las referencias personales');
        }
    }

    // Obtener una referencia personal por id
    async getById(id: string) {
        try {
            const personalReference = await this.prismaService.personalReference.findUnique({ where: { id } });
            return personalReference;
        } catch (error) {
            console.log(error)
            throw new Error('Error al obtener la referencia personal');
        }
    }
}
