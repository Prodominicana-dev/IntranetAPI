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
import {
  CreatePollQuestionDto,
  UpdatePollQuestionDto,
} from './dto/pollquestion.dto';
import { Response } from 'express';
import { PollquestionService } from './pollquestion.service';

@Controller('v1/pollquestion')
export class PollquestionController {
  constructor(private readonly pollquestionService: PollquestionService) {}

  // Crear una pregunta
  @Post()
  async create(@Body() data: CreatePollQuestionDto, @Res() res: Response) {
    try {
      const pollquestion = await this.pollquestionService.create(data);
      return res.status(201).json(pollquestion);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Actualizar una pregunta
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdatePollQuestionDto,
    @Res() res: Response,
  ) {
    try {
      const pollquestion = await this.pollquestionService.update(id, data);
      return res.status(200).json(pollquestion);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Eliminar una pregunta
  @Delete(':id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    try {
      const pollquestion = await this.pollquestionService.delete(id);
      return res.status(200).json(pollquestion);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Obtener todas las preguntas
  @Get()
  async getAll(@Res() res: Response) {
    try {
      const pollquestion = await this.pollquestionService.getAll();
      return res.status(200).json(pollquestion);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Obtener una pregunta por id
  @Get(':id')
  async getById(@Param('id') id: string, @Res() res: Response) {
    try {
      const pollquestion = await this.pollquestionService.getById(id);
      return res.status(200).json(pollquestion);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
