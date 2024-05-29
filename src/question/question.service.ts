import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateQuestionDto, UpdateQuestionDto } from './dto/question.dto';

@Injectable()
export class QuestionService {
  constructor(private readonly prismaService: PrismaService) {}

  // Crear una pregunta
  async create(data: CreateQuestionDto) {
    try {
      const question = await this.prismaService.question.create({ data });
      return question;
    } catch (error) {
      console.log(error);
      throw new Error('Error al crear la pregunta');
    }
  }

  // Actualizar una pregunta
  async update(id: string, data: UpdateQuestionDto) {
    try {
      const question = await this.prismaService.question.update({
        where: { id },
        data,
      });
      // Revisar si la pregunta es de tipo "select", en caso de no serlo borrar las opciones, si tiene.
      if (data.type !== 'select') {
        await this.prismaService.questionOption.deleteMany({
          where: { questionId: id },
        });
      }
      return question;
    } catch (error) {
      console.log(error);
      throw new Error('Error al actualizar la pregunta');
    }
  }

  // Eliminar una pregunta
  async delete(id: string) {
    try {
      const question = await this.prismaService.question.delete({
        where: { id },
      });
      return question;
    } catch (error) {
      console.log(error);
      throw new Error('Error al eliminar la pregunta');
    }
  }

  // Obtener todas las preguntas
  async getAll() {
    try {
      const questions = await this.prismaService.question.findMany({
        orderBy: { createdAt: 'desc' },
        include: { options: true },
      });
      return questions;
    } catch (error) {
      console.log(error);
      throw new Error('Error al obtener las preguntas');
    }
  }

  // Obtener una pregunta por id
  async getById(id: string) {
    try {
      const question = await this.prismaService.question.findUnique({
        where: { id },
      });
      return question;
    } catch (error) {
      console.log(error);
      throw new Error('Error al obtener la pregunta');
    }
  }

  // Obtener una pregunta por tipo
  async getByType(type: string) {
    try {
      const question = await this.prismaService.question.findMany({
        where: { type },
      });
      return question;
    } catch (error) {
      console.log(error);
      throw new Error('Error al obtener la pregunta');
    }
  }
}
