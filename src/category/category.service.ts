import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryDto, UpdateCategoryDto } from './dto/category.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly prismaService: PrismaService) {}

  // Crear una categoría
  async create(data: CreateCategoryDto) {
    try {
      const category = await this.prismaService.category.create({
        data,
      });
      return category;
    } catch (error) {
      console.log(error);
      throw new Error('Error al crear la categoría');
    }
  }

  // Actualizar una categoría
  async update(id: string, data: UpdateCategoryDto) {
    try {
      const category = await this.prismaService.category.update({
        where: { id },
        data,
      });
      return category;
    } catch (error) {
      console.log(error);
      throw new Error('Error al actualizar la categoría');
    }
  }

  // Eliminar una categoría
  async delete(id: string) {
    try {
      const category = await this.prismaService.category.delete({
        where: { id },
      });
      return category;
    } catch (error) {
      console.log(error);
      throw new Error('Error al eliminar la categoría');
    }
  }

  // Obtener todas las categorías
  async getAll() {
    try {
      const categories = await this.prismaService.category.findMany();
      return categories;
    } catch (error) {
      console.log(error);
      throw new Error('Error al obtener las categorías');
    }
  }

  // Obtener una categoría por id
  async getById(id: string) {
    try {
      const category = await this.prismaService.category.findUnique({
        where: { id },
      });
      return category;
    } catch (error) {
      console.log(error);
      throw new Error('Error al obtener la categoría');
    }
  }
}
