import { Injectable } from '@nestjs/common';
import { CreateDegreeDto, UpdateDegreeDto } from './dto/degree.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DegreeService {
    constructor(private readonly prismaService: PrismaService) {}

    // Crear un grado
    async create(data: CreateDegreeDto) {
        try {
            const grade = await this.prismaService.degree.create({ data });
            return grade;
        } catch (error) {
            console.log(error)
            throw new Error('Error al crear el grado');
        }
    }

    // Actualizar un grado
    async update(id: string, data: UpdateDegreeDto) {
        try {
            const grade = await this.prismaService.degree.update({ where: { id }, data });
            return grade;
        } catch (error) {
            console.log(error)
            throw new Error('Error al actualizar el grado');
        }
    }

    // Eliminar un grado
    async delete(id: string) {
        try {
            const grade = await this.prismaService.degree.delete({ where: { id } });
            return grade;
        } catch (error) {
            console.log(error)
            throw new Error('Error al eliminar el grado');
        }
    }

    // Obtener todos los grados
    async getAll() {
        try {
            const grades = await this.prismaService.degree.findMany();
            return grades;
        } catch (error) {
            console.log(error)
            throw new Error('Error al obtener los grados');
        }
    }

    // Obtener un grado por id
    async getById(id: string) {
        try {
            const grade = await this.prismaService.degree.findUnique({ where: { id } });
            return grade;
        } catch (error) {
            console.log(error)
            throw new Error('Error al obtener el grado');
        }
    }
}
