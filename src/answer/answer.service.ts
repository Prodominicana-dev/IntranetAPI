import { Injectable } from '@nestjs/common';
import { CreateAnswerDto, UpdateAnswerDto } from './dto/answer.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AnswerService {
    constructor(private readonly prismaService: PrismaService) {}

    // Crear una respuesta
    async create(data: CreateAnswerDto) {
        try {
            const answer = await this.prismaService.answer.create({ data });
            return answer;
        } catch (error) {
            console.log(error)
            throw new Error('Error al crear la respuesta');
        }
    }

    // Actualizar una respuesta
    async update(id: string, data: UpdateAnswerDto) {
        try {
            const answer = await this.prismaService.answer.update({ where: { id }, data });
            return answer;
        } catch (error) {
            console.log(error)
            throw new Error('Error al actualizar la respuesta');
        }
    }

    // Eliminar una respuesta
    async delete(id: string) {
        try {
            const answer = await this.prismaService.answer.delete({ where: { id } });
            return answer;
        } catch (error) {
            console.log(error)
            throw new Error('Error al eliminar la respuesta');
        }
    }

    // Obtener todas las respuestas de una pregunta de un usuario
    async getAll(questionId: string, userId: string) {
        try {
            const answers = await this.prismaService.answer.findMany({ where: { questionId, userId } });
            return answers;
        } catch (error) {
            console.log(error)
            throw new Error('Error al obtener las respuestas');
        }
    }

    // Obtener todas las respuestas de un usuario
    async getAllByUser(userId: string) {
        try {
            const answers = await this.prismaService.answer.findMany({ where: { userId } });
            return answers;
        } catch (error) {
            console.log(error)
            throw new Error('Error al obtener las respuestas');
        }
    }
}
