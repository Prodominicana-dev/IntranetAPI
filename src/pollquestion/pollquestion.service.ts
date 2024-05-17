import { Injectable } from '@nestjs/common';
import{ CreatePollQuestionDto, UpdatePollQuestionDto} from'./dto/pollquestion.dto'
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PollquestionService {
    constructor(private readonly prismaservice: PrismaService) {}


    // Crear una pregunta de la encuesta
    async create(data: CreatePollQuestionDto) {
        try {
            const pollQuestion = await this.prismaservice.pollQuestion.create({ data });
            return pollQuestion;
        } catch (error) {
            console.log(error);
            throw new Error('Error al crear la pregunta de la encuesta');
        }
    }

    // Actualizar una pregunta de la encuesta
    async update(id: string, data: UpdatePollQuestionDto) {
        try {
            const pollQuestion = await this.prismaservice.pollQuestion.update({ where: { id }, data });
            return pollQuestion;
        } catch (error) {
            console.log(error);
            throw new Error('Error al actualizar la pregunta de la encuesta');
        }
    }

    // Eliminar una pregunta de la encuesta
    async delete(id: string) {
        try {
            const pollQuestion = await this.prismaservice.pollQuestion.delete({ where: { id } });
            return pollQuestion;
        } catch (error) {
            console.log(error);
            throw new Error('Error al eliminar la pregunta de la encuesta');
        }
    }

    // Obtener todas las preguntas de una encuesta
     async getAll() {
        try {
            const pollQuestions = await this.prismaservice.pollQuestion.findMany();
            return pollQuestions;
        } catch (error) {
            console.log(error);
            throw new Error('Error al obtener las preguntas de la encuesta');
        }
    }

    // Obtener una pregunta de la encuesta
    async getById(id: string) {
        try {
            const pollQuestion = await this.prismaservice.pollQuestion.findUnique({ where: { id } });
            return pollQuestion;
        } catch (error) {
            console.log(error);
            throw new Error('Error al obtener la pregunta de la encuesta');
        }
    }
}
