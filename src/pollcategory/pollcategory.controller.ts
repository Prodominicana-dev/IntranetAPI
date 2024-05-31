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
import { Response } from 'express';
import { PollcategoryService } from './pollcategory.service';
import {
  CreatePollCategoryDto,
  UpdatePollCategoryDto,
} from './dto/pollcategory.dto';

@Controller('v1/pollcommitmentcategory')
export class PollcategoryController {
  constructor(private readonly pollcategoryservice: PollcategoryService) {}

  // Crear una categoría de carta compromiso
  @Post()
  async create(@Body() data: CreatePollCategoryDto, @Res() res: Response) {
    try {
      const pollcommitmentcategory =
        await this.pollcategoryservice.create(data);
      return res.status(201).json(pollcommitmentcategory);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Actualizar una categoría de carta compromiso

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdatePollCategoryDto,
    @Res() res: Response,
  ) {
    try {
      const pollcommitmentcategory = await this.pollcategoryservice.update(
        id,
        data,
      );
      return res.status(200).json(pollcommitmentcategory);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Eliminar una categoría de carta compromiso
  @Delete(':id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    try {
      const pollcommitmentcategory = await this.pollcategoryservice.delete(id);
      return res.status(200).json(pollcommitmentcategory);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Obtener todas las categorías de carta compromiso
  @Get()
  async getAll(@Res() res: Response) {
    try {
      const pollcommitmentcategories = await this.pollcategoryservice.getAll();
      return res.status(200).json(pollcommitmentcategories);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Obtener una categoría de carta compromiso por id
  @Get(':id')
  async getById(@Param('id') id: string, @Res() res: Response) {
    try {
      const pollcommitmentcategory = await this.pollcategoryservice.getById(id);
      return res.status(200).json(pollcommitmentcategory);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
