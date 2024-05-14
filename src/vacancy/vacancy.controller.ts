import { Controller,
    Get,
    Post,
    Patch,
    Delete,
    Param,
    Body,
    Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateVacancyDto, UpdateVacancyDto } from './dto/vacancy.dto';
import { VacancyService} from './vacancy.service'
@Controller('api/vacancy')
export class VacancyController {
constructor(private readonly vacancyService : VacancyService) {}

    // Crear una vacante
    @Post()
    async create(@Body() data: CreateVacancyDto, @Res() res: Response) {
        try {
            const vacancy = await this.vacancyService.create(data);
            return res.status(201).json(vacancy);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    // Editar una vacante
    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() data: UpdateVacancyDto,
        @Res() res: Response,
    ) {
        try {
            const vacancy = await this.vacancyService.update(id, data);
            return res.status(200).json(vacancy);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    // Eliminar una vacante
    @Delete(':id')
    async delete(@Param('id') id: string, @Res() res: Response) {
        try {
            await this.vacancyService.delete(id);
            return res.status(204).json();
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    // Obtener todas las vacantes
    @Get()
    async getAll(@Res() res: Response) {
        try {
            const vacancy = await this.vacancyService.getAll();
            return res.status(200).json(vacancy);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    // Obtener una vacante
    @Get(':id')
    async getById(@Param('id') id: string, @Res() res: Response) {
        try {
            const vacancy = await this.vacancyService.getById(id);
            return res.status(200).json(vacancy);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

}
