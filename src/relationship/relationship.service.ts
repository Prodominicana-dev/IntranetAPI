import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRelationshipDto, UpdateRelationshipDto } from './dto/relationship.dto';

@Injectable()
export class RelationshipService {
    constructor(private readonly prismaService: PrismaService) {}

    // Crear una relación
    async create(data: CreateRelationshipDto) {
        try {
            const relationship = await this.prismaService.relationship.create({ data });
            return relationship;
        } catch (error) {
            console.log(error)
            throw new Error('Error al crear la relación');
        }
    }

    // Actualizar una relación
    async update(id: string, data: UpdateRelationshipDto) {
        try {
            const relationship = await this.prismaService.relationship.update({ where: { id }, data });
            return relationship;
        } catch (error) {
            console.log(error)
            throw new Error('Error al actualizar la relación');
        }
    }

    // Eliminar una relación
    async delete(id: string) {
        try {
            const relationship = await this.prismaService.relationship.delete({ where: { id } });
            return relationship;
        } catch (error) {
            console.log(error)
            throw new Error('Error al eliminar la relación');
        }
    }

    // Obtener todas las relaciones de un usuario
    async getAll(userId: string) {
        try {
            const relationships = await this.prismaService.relationship.findMany({ where: { userId } });
            return relationships;
        } catch (error) {
            console.log(error)
            throw new Error('Error al obtener las relaciones');
        }
    }

    // Obtener una relación por id
    async getById(id: string) {
        try {
            const relationship = await this.prismaService.relationship.findUnique({ where: { id } });
            return relationship;
        } catch (error) {
            console.log(error)
            throw new Error('Error al obtener la relación');
        }
    }
}
