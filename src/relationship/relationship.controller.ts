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
import { RelationshipService } from './relationship.service';
import { Response } from 'express';
import {
  CreateRelationshipDto,
  UpdateRelationshipDto,
} from './dto/relationship.dto';

@Controller('api/relationship')
export class RelationshipController {
  constructor(private readonly relationshipService: RelationshipService) {}

  // Crear una relación
  @Post()
  async create(@Body() data: CreateRelationshipDto, @Res() res: Response) {
    try {
      const relationship = await this.relationshipService.create(data);
      return res.status(201).json(relationship);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Editar una relación
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateRelationshipDto,
    @Res() res: Response,
  ) {
    try {
      const relationship = await this.relationshipService.update(id, data);
      return res.status(200).json(relationship);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Eliminar una relación
  @Delete(':id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    try {
      const relationship = await this.relationshipService.delete(id);
      return res.status(200).json(relationship);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Obtener todas las relaciones de un usuario
  @Get('u/:userId')
  async getAll(@Param('userId') userId: string, @Res() res: Response) {
    try {
      const relationships = await this.relationshipService.getAll(userId);
      return res.status(200).json(relationships);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Obtener una relación por id
  @Get(':id')
  async getById(@Param('id') id: string, @Res() res: Response) {
    try {
      const relationship = await this.relationshipService.getById(id);
      return res.status(200).json(relationship);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Obtener todas las relaciones de un usuario por auth0Id
  @Get('a/:auth0Id')
  async getAllByAuth0Id(
    @Param('auth0Id') auth0Id: string,
    @Res() res: Response,
  ) {
    try {
      const relationships =
        await this.relationshipService.getByAuth0Id(auth0Id);
      return res.status(200).json(relationships);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
