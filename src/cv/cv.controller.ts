import {
  Controller,
  Get,
  Post,
  Patch,
  Res,
  UseInterceptors,
  UploadedFiles,
  StreamableFile,
  Body,
  Param,
} from '@nestjs/common';
import { Response } from 'express';
import { FilesInterceptor } from '@nestjs/platform-express';
import { CvService } from './cv.service';

const fs = require('fs');
const path = require('path');
const mime = require('mime-types');

@Controller('v1/cv')
export class CvController {
  constructor(private readonly cvService: CvService) {}

  // Crear un CV.
  @Post()
  @UseInterceptors(FilesInterceptor('files'))
  async create(@Body() data, @UploadedFiles() files, @Res() res: Response) {
    try {
      if (files.length === 0) return;
      const file = files[0];
      const ext = mime.extension(file.mimetype);
      const fileName = `${data.userId}_cv.${ext}`;
      const filePath = path.join(process.cwd(), `/public/${data.userId}/`);

      // Revisar si existe la ruta. En caso que no exista, creala. En caso que exista, eliminala incluyendo a todos los documentos.
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      } else {
        // Eliminar la carpeta y eliminar todos los registros de la base de datos.
        await this.cvService.deleteAll(data.userId);
        fs.rmdirSync(filePath, { recursive: true });
        fs.mkdirSync(filePath, { recursive: true });
      }

      fs.writeFileSync(`${filePath}/${fileName}`, file.buffer);
      const cvData = {
        name: fileName,
        path: `${filePath}/${fileName}`,
        originalName: file.originalname,
        userId: data.userId,
      };
      const cv = await this.cvService.create(cvData);
      return res.status(201).json(cv);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Obtener un CV.
  @Get('/:id/:name')
  getImages(
    @Param('id') id: string,
    @Param('name') cv: string,
    @Res({ passthrough: true }) res: Response,
  ): StreamableFile {
    res.set({ 'Content-Type': 'application/pdf' });
    const imagePath = path.join(process.cwd(), `public/${id}/`, cv);
    const fileStream = fs.createReadStream(imagePath);
    const streamableFile = new StreamableFile(fileStream);
    return streamableFile;
  }
}
