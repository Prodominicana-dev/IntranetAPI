import { Controller, Get, Post, Patch, Delete, Body, Param, Res } from '@nestjs/common';
import { CreateEducationDto, UpdateEducationDto } from './dto/education.dto';
import { Response } from 'express';
import { EducationService } from './education.service';

@Controller('api/education')
export class EducationController {
    constructor(private readonly educationService: EducationService){}

    // Crear una educación
    @Post()
    async create(@Body() data: CreateEducationDto, @Res() res: Response){
        try {
            const education = await this.educationService.create(data);
            return res.status(201).json(education);
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }

    // Editar una educación
    @Patch(':id')
    async update(@Param('id') id: string, @Body() data: UpdateEducationDto, @Res() res: Response){
        try {
            const education = await this.educationService.update(id, data);
            return res.status(200).json(education);
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }

    // Eliminar una educación
    @Delete(':id')
    async delete(@Param('id') id: string, @Res() res: Response){
        try {
            const education = await this.educationService.delete(id);
            return res.status(200).json(education);
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }

    // Obtener todas las educaciones de un usuario
    @Get(':userId')
    async getAll(@Param('userId') userId: string, @Res() res: Response){
        try {
            const educations = await this.educationService.getAll(userId);
            return res.status(200).json(educations);
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }

    // Obtener una educación por id
    @Get(':id')
    async getById(@Param('id') id: string, @Res() res: Response){
        try {
            const education = await this.educationService.getById(id);
            return res.status(200).json(education);
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }
}
