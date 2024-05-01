import { Controller, Get, Post, Patch, Delete, Body, Param, Res } from '@nestjs/common';
import { CreateWorkExperienceDto, UpdateWorkExperienceDto } from './dto/work-experience.dto';
import { Response } from 'express';
import { WorkExperienceService } from './work-experience.service';

@Controller('api/work-experience')
export class WorkExperienceController {
    constructor(private readonly workExperienceService: WorkExperienceService){}

    // Crear una experiencia laboral
    @Post()
    async create(@Body() data: CreateWorkExperienceDto, @Res() res: Response){
        try {
            const workExperience = await this.workExperienceService.create(data);
            return res.status(201).json(workExperience);
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }

    // Editar una experiencia laboral
    @Patch(':id')
    async update(@Param('id') id: string, @Body() data: UpdateWorkExperienceDto, @Res() res: Response){
        try {
            const workExperience = await this.workExperienceService.update(id, data);
            return res.status(200).json(workExperience);
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }

    // Eliminar una experiencia laboral
    @Delete(':id')
    async delete(@Param('id') id: string, @Res() res: Response){
        try {
            const workExperience = await this.workExperienceService.delete(id);
            return res.status(200).json(workExperience);
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }

    // Obtener todas las experiencias laborales de un usuario
    @Get(':userId')
    async getAll(@Param('userId') userId: string, @Res() res: Response){
        try {
            const workExperiences = await this.workExperienceService.getAll(userId);
            return res.status(200).json(workExperiences);
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }

    // Obtener una experiencia laboral por id
    @Get(':id')
    async getById(@Param('id') id: string, @Res() res: Response){
        try {
            const workExperience = await this.workExperienceService.getById(id);
            return res.status(200).json(workExperience);
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }
    
}
