import { Controller, Get, Post, Patch, Delete, Body, Param, Res } from '@nestjs/common';
import { CreateProfessionalReferenceDto, UpdateProfessionalReferenceDto } from './dto/professional-reference.dto';
import { Response } from 'express';
import { ProfessionalReferenceService } from './professional-reference.service';

@Controller('api/professional-reference')
export class ProfessionalReferenceController {
    constructor(private readonly professionalReferenceService: ProfessionalReferenceService) {}

    // Crear una referencia profesional
    @Post()
    async create(@Body() data: CreateProfessionalReferenceDto, @Res() res: Response) {
        try {
            const professionalReference = await this.professionalReferenceService.create(data);
            return res.status(201).json(professionalReference);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

    // Actualizar una referencia profesional
    @Patch(':id')
    async update(@Param('id') id: string, @Body() data: UpdateProfessionalReferenceDto, @Res() res: Response) {
        try {
            const professionalReference = await this.professionalReferenceService.update(id, data);
            return res.status(200).json(professionalReference);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

    // Eliminar una referencia profesional
    @Delete(':id')
    async delete(@Param('id') id: string, @Res() res: Response) {
        try {
            const professionalReference = await this.professionalReferenceService.delete(id);
            return res.status(200).json(professionalReference);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

    // Obtener todas las referencias profesionales de un usuario
    @Get('u/:userId')
    async getAll(@Param('userId') userId: string, @Res() res: Response) {
        try {
            const professionalReferences = await this.professionalReferenceService.getAll(userId);
            return res.status(200).json(professionalReferences);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

    // Obtener una referencia profesional por id
    @Get(':id')
    async getById(@Param('id') id: string, @Res() res: Response) {
        try {
            const professionalReference = await this.professionalReferenceService.getById(id);
            return res.status(200).json(professionalReference);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
    
}
