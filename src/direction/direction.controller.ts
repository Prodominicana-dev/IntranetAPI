import { Controller,
    Get,
    Post,
    Patch,
    Delete,
    Body,
    Param,
    Res
 } from '@nestjs/common';
 import {CreateDirectionDto, UpdateDirectionDto} from './dto/direction.dto'
 import { Response } from 'express';
 import { DirectionService } from './direction.service';

@Controller('api/direction')
export class DirectionController {

    constructor(private readonly directionservice: DirectionService) {}

    // Crear una dirección
    @Post()
    async create(@Body() data: CreateDirectionDto, @Res() res: Response) {
        try {
            const direction = await this.directionservice.create(data);
            return res.status(201).json(direction);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    // Actualizar una dirección
    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() data: UpdateDirectionDto,
        res:Response
    ) {
        try {
            const direction = await this.directionservice.update(id, data);
            return res.status(200).json(direction);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    // Eliminar una dirección
    @Delete(':id')
    async delete(@Param('id') id: string, @Res() res: Response) {
        try {
           const direction =  await this.directionservice.delete(id);
            return res.status(200).json(direction);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    // Obtener todas las direcciones
    @Get()
    async getAll(@Res() res: Response) {
        try {
            const directions = await this.directionservice.getAll();
            return res.status(200).json(directions);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    // Obtener una dirección por id
    @Get(':id')
    async getById(@Param('id') id: string, @Res() res: Response) {
        try {
            const direction = await this.directionservice.getById(id);
            return res.status(200).json(direction);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}
