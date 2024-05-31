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
import {
  CreateApplicationDto,
  UpdateApplicationDto,
} from './dto/application.dto';
import { ApplicationService } from './application.service';
@Controller('v1/application')
export class ApplicationController {
  constructor(private readonly aplicactionsService: ApplicationService) {}

  // Crear una aplicación
  @Post()
  async create(@Body() data: CreateApplicationDto, @Res() res: Response) {
    try {
      const application = await this.aplicactionsService.create(data);
      return res.status(201).json(application);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Editar una aplicación
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateApplicationDto,
    @Res() res: Response,
  ) {
    try {
      const application = await this.aplicactionsService.update(id, data);
      return res.status(200).json(application);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Eliminar una aplicación
  @Delete(':id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    try {
      const application = await this.aplicactionsService.delete(id);
      return res.status(200).json(application);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Obtener todas las aplicaciones
  @Get()
  async getAll(@Res() res: Response) {
    try {
      const applications = await this.aplicactionsService.getAll();
      return res.status(200).json(applications);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Obtener una aplicación por id
  @Get(':id')
  async getById(@Param('id') id: string, @Res() res: Response) {
    try {
      const application = await this.aplicactionsService.getById(id);
      return res.status(200).json(application);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Obtener todas las aplicaciones de un usuario
  @Get('/user/:id')
  async getByUserId(@Param('id') id: string, @Res() res: Response) {
    try {
      const applications = await this.aplicactionsService.getAllByUser(id);
      return res.status(200).json(applications);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Obtener todas las aplicaciones de una vacante
  @Get('/vacancy/:id')
  async getByJobId(@Param('id') id: string, @Res() res: Response) {
    try {
      const applications = await this.aplicactionsService.getAllByVacancy(id);
      return res.status(200).json(applications);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  @Patch('/approved/:id')
  async aprovedUpdate(@Param('id') id: string, @Res() res: Response) {
    try {
      const aproved = await this.aplicactionsService.approvedUpdate(id);
      return res.status(200).json(aproved);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  @Get('/approved')
  async aprovedGetAll(@Param('id') id: string, @Res() res: Response) {
    try {
      const aproved = await this.aplicactionsService.approvedGetAll(id);
      return res.status(200).json(aproved);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  @Get('/approved/:id')
  async aprovedGetById(@Param('id') id: string, @Res() res: Response) {
    try {
      const aproved = await this.aplicactionsService.approvedGetById(id);
      return res.status(200).json(aproved);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  @Patch('/dismissed/:id')
  async dismissedUpdate(@Param('id') id: string, @Res() res: Response) {
    try {
      const dismissed = await this.aplicactionsService.dismissedUpdate(id);
      return res.status(200).json(dismissed);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  @Get('/dismissed')
  async dismissedGetAll(@Param('id') id: string, @Res() res: Response) {
    try {
      const aproved = await this.aplicactionsService.dismissedGetAll(id);
      return res.status(200).json(aproved);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  @Get('/dismissed/:id')
  async dismissedGetById(@Param('id') id: string, @Res() res: Response) {
    try {
      const aproved = await this.aplicactionsService.dismissedGetById(id);
      return res.status(200).json(aproved);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
