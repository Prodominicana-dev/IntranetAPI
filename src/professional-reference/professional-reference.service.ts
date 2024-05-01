import { Injectable } from '@nestjs/common';
import { CreateProfessionalReferenceDto, UpdateProfessionalReferenceDto } from './dto/professional-reference.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProfessionalReferenceService {
    constructor(private readonly prismaService: PrismaService) {}

    // Crear una referencia profesional
    async create(data: CreateProfessionalReferenceDto) {
        try {
            const professionalReference = await this.prismaService.professionalReference.create({ data });
            return professionalReference;
        } catch (error) {
            console.log(error)
            throw new Error('Error al crear la referencia profesional');
        }
    }

    // Actualizar una referencia profesional
    async update(id: string, data: UpdateProfessionalReferenceDto) {
        try {
            const professionalReference = await this.prismaService.professionalReference.update({ where: { id }, data });
            return professionalReference;
        } catch (error) {
            console.log(error)
            throw new Error('Error al actualizar la referencia profesional');
        }
    }

    // Eliminar una referencia profesional
    async delete(id: string) {
        try {
            const professionalReference = await this.prismaService.professionalReference.delete({ where: { id } });
            return professionalReference;
        } catch (error) {
            console.log(error)
            throw new Error('Error al eliminar la referencia profesional');
        }
    }

    // Obtener todas las referencias profesionales de un usuario
    async getAll(userId: string) {
        try {
            const professionalReferences = await this.prismaService.professionalReference.findMany({ where: { userId } });
            return professionalReferences;
        } catch (error) {
            console.log(error)
            throw new Error('Error al obtener las referencias profesionales');
        }
    }

    // Obtener una referencia profesional por id
    async getById(id: string) {
        try {
            const professionalReference = await this.prismaService.professionalReference.findUnique({ where: { id } });
            return professionalReference;
        } catch (error) {
            console.log(error)
            throw new Error('Error al obtener la referencia profesional');
        }
    }

}
