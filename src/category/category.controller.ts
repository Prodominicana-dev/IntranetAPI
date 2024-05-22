import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  Res,
  UseInterceptors,
  UploadedFiles,
  StreamableFile,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateCategoryDto, UpdateCategoryDto } from './dto/category.dto';
import { CategoryService } from './category.service';
import { FilesInterceptor } from '@nestjs/platform-express';

const fs = require('fs');
const path = require('path');
const mime = require('mime-types');

@Controller('api/category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  // Crear una categoría
  @Post()
  @UseInterceptors(FilesInterceptor('icon'))
  async create(
    @Body() data: CreateCategoryDto,
    @Res() res: Response,
    @UploadedFiles() files?,
  ) {
    try {
      const category = await this.categoryService.create(data);
      if (files === undefined) return res.status(201).json(category);
      if (files.length > 0) {
        const file = files[0];
        const ext = mime.extension(file.mimetype);
        const fileName = `${category.id}.${ext}`;
        const filePath = path.join(process.cwd(), `/public/cat/icons/`);
        if (!fs.existsSync(filePath)) {
          fs.mkdirSync(filePath, { recursive: true });
        }
        category.icon = fileName;
        const newCat = await this.categoryService.update(category.id, category);
        await fs.writeFileSync(path.join(filePath, fileName), file.buffer);
        return res.status(201).json(newCat);
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Editar una categoría
  @Patch(':id')
  @UseInterceptors(FilesInterceptor('icon'))
  async update(
    @Param('id') id: string,
    @Body() data: UpdateCategoryDto,
    @Res() res: Response,
    @UploadedFiles() files?,
  ) {
    try {
      console.log(files);
      const category = await this.categoryService.update(id, data);
      if (files.length === 0) return res.status(200).json(category);
      if (files.length > 0) {
        const file = files[0];
        const ext = mime.extension(file.mimetype);
        const fileName = `${category.id}.${ext}`;
        const filePath = path.join(process.cwd(), `/public/cat/icons/`);
        if (!fs.existsSync(filePath)) {
          fs.mkdirSync(filePath, { recursive: true });
        }
        // Verificar si existe un archivo con el nombre anterior y eliminarlo
        if (category.icon) {
          const oldFile = path.join(filePath, category.icon);
          if (fs.existsSync(oldFile)) {
            fs.unlinkSync(oldFile);
          }
        }
        category.icon = fileName;
        const newCat = await this.categoryService.update(category.id, category);
        await fs.writeFileSync(path.join(filePath, fileName), file.buffer);
        return res.status(200).json(newCat);
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  @Get('/cat/svg/:name')
  getImages(
    @Param('name') imageName: string,
    @Res({ passthrough: true }) res: Response,
  ): StreamableFile {
    // res.set({ 'Content-Type': 'image/jpeg' });
    const imagePath = path.join(process.cwd(), `public/cat/icons/`, imageName);
    const mimeType = mime.lookup(imageName);
    if (!mimeType) {
      return undefined;
    }
    const fileStream = fs.createReadStream(imagePath);
    const streamableFile = new StreamableFile(fileStream);
    streamableFile.options.type = mimeType;
    return streamableFile;
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
