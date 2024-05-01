import { Controller, Get, Post, Patch, Delete, Body, Param, Res } from '@nestjs/common';
import { CreateDegreeDto, UpdateDegreeDto } from './dto/degree.dto';
import { Response } from 'express';
import { DegreeService } from './degree.service';

@Controller('api/degree')
export class DegreeController {
    constructor(private readonly degreeService: DegreeService) {}

    // Crear un grado
    @Post()
    async create(@Body() data: CreateDegreeDto, @Res() res: Response) {
        try {
            const degree = await this.degreeService.create(data);
            return res.status(201).json(degree);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

    // Actualizar un grado
    @Patch(':id')
    async update(@Param('id') id: string, @Body() data: UpdateDegreeDto, @Res() res: Response) {
        try {
            const degree = await this.degreeService.update(id, data);
            return res.status(200).json(degree);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

    // Eliminar un grado
    @Delete(':id')
    async delete(@Param('id') id: string, @Res() res: Response) {
        try {
            const degree = await this.degreeService.delete(id);
            return res.status(200).json(degree);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

    // Obtener todos los grados
    @Get()
    async getAll(@Res() res: Response) {
        try {
            const degrees = await this.degreeService.getAll();
            return res.status(200).json(degrees);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

    // Obtener un grado por id
    @Get(':id')
    async getById(@Param('id') id: string, @Res() res: Response) {
        try {
            const degree = await this.degreeService.getById(id);
            return res.status(200).json(degree);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}
