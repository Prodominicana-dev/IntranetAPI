import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateCategoryDto, UpdateCategoryDto } from './dto/category.dto';
import { CategoryService } from './category.service';

@Controller('api/category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  // Crear una categoría
  @Post()
  async create(@Body() data: CreateCategoryDto, @Res() res: Response) {
    try {
      const category = await this.categoryService.create(data);
      return res.status(201).json(category);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Editar una categoría
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateCategoryDto,
    @Res() res: Response,
  ) {
    try {
      const category = await this.categoryService.update(id, data);
      return res.status(200).json(category);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Eliminar una categoría
  @Delete(':id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    try {
      const category = await this.categoryService.delete(id);
      return res.status(200).json(category);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Obtener todas las categorías
  @Get()
  async getAll(@Res() res: Response) {
    try {
      const categories = await this.categoryService.getAll();
      return res.status(200).json(categories);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Obtener una categoría por id
  @Get(':id')
  async getById(@Param('id') id: string, @Res() res: Response) {
    try {
      const category = await this.categoryService.getById(id);
      return res.status(200).json(category);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
