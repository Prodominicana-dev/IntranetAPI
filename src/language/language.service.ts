import { Injectable } from '@nestjs/common';
import { CreateLanguageDto, UpdateLanguageDto } from './dto/language.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LanguageService {
    constructor(private readonly prismaService: PrismaService) {}

    // Crear un idioma
    async create(data: CreateLanguageDto) {
        try {
            const language = await this.prismaService.language.create({ data });
            return language;
        } catch (error) {
            console.log(error)
            throw new Error('Error al crear el idioma');
        }
    }

    // Actualizar un idioma
    async update(id: string, data: UpdateLanguageDto) {
        try {
            const language = await this.prismaService.language.update({ where: { id }, data });
            return language;
        } catch (error) {
            console.log(error)
            throw new Error('Error al actualizar el idioma');
        }
    }

    // Eliminar un idioma
    async delete(id: string) {
        try {
            const language = await this.prismaService.language.delete({ where: { id } });
            return language;
        } catch (error) {
            console.log(error)
            throw new Error('Error al eliminar el idioma');
        }
    }

    // Obtener todos los idiomas de un usuario
    async getAll(userId: string) {
        try {
            const languages = await this.prismaService.language.findMany({ where: { userId } });
            return languages;
        } catch (error) {
            console.log(error)
            throw new Error('Error al obtener los idiomas');
        }
    }

    // Obtener un idioma por id
    async getById(id: string) {
        try {
            const language = await this.prismaService.language.findUnique({ where: { id } });
            return language;
        } catch (error) {
            console.log(error)
            throw new Error('Error al obtener el idioma');
        }
    }
}
