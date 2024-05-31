import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Res,
} from '@nestjs/common';
import { CreateAnswerDto, UpdateAnswerDto } from './dto/answer.dto';
import { Response } from 'express';
import { AnswerService } from './answer.service';

@Controller('v1/answer')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  // Crear una respuesta
  @Post()
  async create(@Body() data: CreateAnswerDto, @Res() res: Response) {
    try {
      const answer = await this.answerService.create(data);
      return res.status(201).json(answer);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Editar una respuesta
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateAnswerDto,
    @Res() res: Response,
  ) {
    try {
      const answer = await this.answerService.update(id, data);
      return res.status(200).json(answer);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Eliminar una respuesta
  @Delete(':id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    try {
      const answer = await this.answerService.delete(id);
      return res.status(200).json(answer);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Obtener todas las respuestas de una pregunta de un usuario
  @Get(':questionId/:userId')
  async getAll(
    @Param('questionId') questionId: string,
    @Param('userId') userId: string,
    @Res() res: Response,
  ) {
    try {
      const answers = await this.answerService.getAll(questionId, userId);
      return res.status(200).json(answers);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Obtener todas las respuestas de un usuario
  @Get(':userId')
  async getAllByUser(@Param('userId') userId: string, @Res() res: Response) {
    try {
      const answers = await this.answerService.getAllByUser(userId);
      return res.status(200).json(answers);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
