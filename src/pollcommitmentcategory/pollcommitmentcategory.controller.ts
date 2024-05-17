import { 
Controller,
 Get,
 Post,
 Patch,
 Delete,
 Body,
 Param,
 Res

 } from '@nestjs/common';
import { Response } from 'express';
import { PollcommitmentcategoryService } from './pollcommitmentcategory.service';
import { CreatePollCommitmentCategoryDto, UpdatePollCommitmentCategoryDto } from './dto/pollcommitmentcategory.dto';

@Controller('api/pollcommitmentcategory')
export class PollcommitmentcategoryController {
   
    constructor(private readonly pollcommitmentcategoryservice: PollcommitmentcategoryService) {}

    // Crear una categoría de carta compromiso
    @Post()
    async create(@Body() data: CreatePollCommitmentCategoryDto, @Res() res: Response) {
        try {
            const pollcommitmentcategory = await this.pollcommitmentcategoryservice.create(data);
            return res.status(201).json(pollcommitmentcategory);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    // Actualizar una categoría de carta compromiso

    @Patch(':id')
    async update(@Param('id') id: string, @Body() data: UpdatePollCommitmentCategoryDto, @Res() res: Response) {
        try {
            const pollcommitmentcategory = await this.pollcommitmentcategoryservice.update(id, data);
            return res.status(200).json(pollcommitmentcategory);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    // Eliminar una categoría de carta compromiso
    @Delete(':id')
    async delete(@Param('id') id: string, @Res() res: Response) {
        try {
            const pollcommitmentcategory = await this.pollcommitmentcategoryservice.delete(id);
            return res.status(200).json(pollcommitmentcategory);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    // Obtener todas las categorías de carta compromiso
    @Get()
    async getAll(@Res() res: Response) {
        try {
            const pollcommitmentcategories = await this.pollcommitmentcategoryservice.getAll();
            return res.status(200).json(pollcommitmentcategories);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    // Obtener una categoría de carta compromiso por id
    @Get(':id')
    async getById(@Param('id') id: string, @Res() res: Response) {
        try {
            const pollcommitmentcategory = await this.pollcommitmentcategoryservice.getById(id);
            return res.status(200).json(pollcommitmentcategory);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}
