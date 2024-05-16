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
import { CreateCarreersDto, UpdateCarreersDto} from './dto/carriers .dto';
import {CarreersService} from './carriers .service'

@Controller('api/carriers')
export class CarreersController {
  constructor( private readonly carreersService: CarreersService ) {}

    // Crear una carrera
    @Post()
    async create(@Body() data: CreateCarreersDto, @Res() res: Response) {
        try {
            const carreers = await this.carreersService.create(data);
            return res.status(201).json(carreers);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    // Editar una carrera
    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() data: UpdateCarreersDto,
        @Res() res: Response,
    ) {
      try {
        const carreers = await this.carreersService.update(id, data);
        return res.status(200).json(carreers);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
    }

   // Eliminar una carrera
    @Delete(':id')
    async delete(@Param('id') id: string, @Res() res: Response) {
      try {
        const carreers = await this.carreersService.delete(id);
        return res.status(200).json(carreers);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
    }

    // Obtener todas las carreras
    
    @Get()
    async getAll(@Res() res: Response){
      try {
        const carreers = await this.carreersService.getAll();
        return res.status(200).json(carreers);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
    }
    
    // Obtener una carrera por id

    @Get(':id')
    async getById(@Param('id') id: string, @Res() res: Response){
      try {
        const carreers = await this.carreersService.getById(id);
        return res.status(200).json(carreers);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
    }
    
}
