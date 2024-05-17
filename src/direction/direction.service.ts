import { Injectable } from '@nestjs/common';
import {CreateDirectionDto,UpdateDirectionDto} from './dto/direction.dto'
import {PrismaService} from 'src/prisma/prisma.service'

@Injectable()
export class DirectionService {
   
    constructor(private readonly prismaservice : PrismaService) {}

    // Crear una dirección
    async create(data: CreateDirectionDto) {
        try {
            const direction = await this.prismaservice.direction.create({ data });
            return direction;
        } catch (error) {
            console.log(error)
            throw new Error('Error al crear la dirección');
        }
    }


    // Actualizar una dirección
    async update(id: string, data: UpdateDirectionDto) {
        try {
            const direction = await this.prismaservice.direction.update({ where: { id }, data });
            return direction;
        } catch (error) {
            console.log(error)
            throw new Error('Error al actualizar la dirección');
        }
    }

    // Eliminar una dirección
    async delete(id: string) {
        try {
            const direction = await this.prismaservice.direction.delete({ where: { id } });
            return direction;
        } catch (error) {
            console.log(error)
            throw new Error('Error al eliminar la dirección');
        }
    }

    // Obtener todas las direcciones
    async getAll() {
        try {
            const directions = await this.prismaservice.direction.findMany();
            return directions;
        } catch (error) {
            console.log(error)
            throw new Error('Error al obtener las direcciones');
        }
    }

    // Obtener una dirección por id

    async getById(id: string) {
        try {
            const direction = await this.prismaservice.direction.findUnique({ where: { id } });
            return direction;
        } catch (error) {
            console.log(error)
            throw new Error('Error al obtener la dirección');
        }
    }
}
