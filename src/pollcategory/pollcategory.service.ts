import { Injectable } from '@nestjs/common';
import {CreatePollCategoryDto, UpdatePollCategoryDto} from './dto/pollcategory.dto'
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PollcategoryService {
 
    constructor(private readonly prismaservice: PrismaService) {}

    // Crear una categoría de  encuesta  compromiso 
    async create(data: CreatePollCategoryDto) {
        try {
            const pollcommitmentcategory = await this.prismaservice.pollCommitmentCategory.create({
                data,
            });
            return pollcommitmentcategory;
        } catch (error) {
            console.log(error);
            throw new Error('Error al  crear una categoría de  encuesta  compromiso ');
        }
    }

    // Actualizar una categoría de  encuesta  compromiso 
    async update(id: string, data: UpdatePollCategoryDto) {
        try {
            const pollcommitmentcategory = await this.prismaservice.pollCommitmentCategory.update({
                where: { id },
                data,
            });
            return pollcommitmentcategory;
        } catch (error) {
            console.log(error);
            throw new Error('Error al actualizar una categoría de  encuesta  compromiso ');
        }
    }
    // Eliminar una categoría de  encuesta  compromiso
    async delete(id: string) {
        try {
            const pollcommitmentcategory = await this.prismaservice.pollCommitmentCategory.delete({ where: { id } });
            return pollcommitmentcategory;
        } catch (error) {
            console.log(error);
            throw new Error('Error al eliminar una categoría de  encuesta  compromiso ');
        }
    }

    // Obtener todas las categorías de  encuesta  compromiso
    async getAll() {
        try {
            const pollcommitmentcategories = await this.prismaservice.pollCommitmentCategory.findMany();
            return pollcommitmentcategories;
        } catch (error) {
            console.log(error);
            throw new Error('Error al obtener todas las categorías de  encuesta  compromiso ');
        }
    }

    // Obtener una categoría de  encuesta  compromiso
    async getById(id: string) {

        try {
            const pollcommitmentcategory = await this.prismaservice.pollCommitmentCategory.findUnique({ where: { id } });
            return pollcommitmentcategory;
        } catch (error) {
            console.log(error);
            throw new Error('Error al obtener una categoría de  encuesta  compromiso ');
        }
    }

}
