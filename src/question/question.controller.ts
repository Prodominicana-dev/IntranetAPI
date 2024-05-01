import { Controller, Get, Post, Patch, Delete, Body, Param, Res } from '@nestjs/common';
import { QuestionService } from './question.service';
import { CreateQuestionDto, UpdateQuestionDto } from './dto/question.dto';
import { Response } from 'express';

@Controller('api/question')
export class QuestionController {
    constructor(private readonly questionService: QuestionService){}

    // Crear una pregunta
    @Post()
    async create(@Body() data: CreateQuestionDto, @Res() res: Response){
        try {
            const question = await this.questionService.create(data);
            return res.status(201).json(question);
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }

    // Editar una pregunta
    @Patch(':id')
    async update(@Param('id') id: string, @Body() data: UpdateQuestionDto, @Res() res: Response){
        try {
            const question = await this.questionService.update(id, data);
            return res.status(200).json(question);
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }

    // Eliminar una pregunta
    @Delete(':id')
    async delete(@Param('id') id: string, @Res() res: Response){
        try {
            const question = await this.questionService.delete(id);
            return res.status(200).json(question);
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }

    // Obtener todas las preguntas
    @Get()
    async getAll(@Res() res: Response){
        try {
            const questions = await this.questionService.getAll();
            return res.status(200).json(questions);
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }

    // Obtener una pregunta por id
    @Get(':id')
    async getById(@Param('id') id: string, @Res() res: Response){
        try {
            const question = await this.questionService.getById(id);
            return res.status(200).json(question);
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }
}
