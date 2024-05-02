import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateManyQuestionOptionDto, CreateQuestionOptionDto, UpdateQuestionOptionDto } from './dto/question-option.dto';

@Injectable()
export class QuestionOptionService {
    constructor(private readonly prismaService: PrismaService) { }

    // Crear una opción de pregunta
    async create(data: CreateQuestionOptionDto) {
        try {
            const questionOption = await this.prismaService.questionOption.create({ data });
            return questionOption;
        } catch (error) {
            console.log(error)
            throw new Error('Error al crear la opción de pregunta');
        }
    }

    // Crear varias opciones de una pregunta
    async createMany(data: CreateQuestionOptionDto[]){
        try {
            const questionOptions = await this.prismaService.questionOption.createMany({ data });
            return questionOptions;
        } catch (error) {
            console.log(error)
            throw new Error('Error al crear las opciones de pregunta');
        }
    }

    // Actualizar una opción de pregunta
    async update(id: string, data: UpdateQuestionOptionDto) {
        try {
            const questionOption = await this.prismaService.questionOption.update({ where: { id }, data });
            return questionOption;
        } catch (error) {
            console.log(error)
            throw new Error('Error al actualizar la opción de pregunta');
        }
    }

    // Eliminar una opción de pregunta
    async delete(id: string) {
        try {
            const questionOption = await this.prismaService.questionOption.delete({ where: { id } });
            return questionOption;
        } catch (error) {
            console.log(error)
            throw new Error('Error al eliminar la opción de pregunta');
        }
    }

    // Obtener todas las opciones de pregunta de una pregunta
    async getAll(questionId: string) {
        try {
            const questionOptions = await this.prismaService.questionOption.findMany({ where: { questionId } });
            return questionOptions;
        } catch (error) {
            console.log(error)
            throw new Error('Error al obtener las opciones de pregunta');
        }
    }
}
