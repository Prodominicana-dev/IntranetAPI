import { Controller, Get, Post, Patch, Delete, Body, Param, Res } from '@nestjs/common';
import { CreateQuestionOptionDto, UpdateQuestionOptionDto } from './dto/question-option.dto';
import { Response } from 'express';
import { QuestionOptionService } from './question-option.service';

@Controller('api/question-option')
export class QuestionOptionController {
    constructor(private readonly questionOptionService: QuestionOptionService){}

    // Crear una opción de pregunta
    @Post()
    async create(@Body() data: CreateQuestionOptionDto, @Res() res: Response){
        try {
            const questionOption = await this.questionOptionService.create(data);
            return res.status(201).json(questionOption);
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }

    // Editar una opción de pregunta
    @Patch(':id')
    async update(@Param('id') id: string, @Body() data: UpdateQuestionOptionDto, @Res() res: Response){
        try {
            const questionOption = await this.questionOptionService.update(id, data);
            return res.status(200).json(questionOption);
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }

    // Eliminar una opción de pregunta
    @Delete(':id')
    async delete(@Param('id') id: string, @Res() res: Response){
        try {
            const questionOption = await this.questionOptionService.delete(id);
            return res.status(200).json(questionOption);
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }

    // Obtener todas las opciones de pregunta de una pregunta
    @Get(':questionId')
    async getAll(@Param('questionId') questionId: string, @Res() res: Response){
        try {
            const questionOptions = await this.questionOptionService.getAll(questionId);
            return res.status(200).json(questionOptions);
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }
    
}
