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
 import { CreateDepartmentDto, UpdateDepartmentDto} from './dto/department.dto'
 import { Response } from 'express';
 import { DepartmentService } from './department.service';

@Controller('api/department')
export class DepartmentController {
    constructor(private readonly departmentService: DepartmentService) {}

    // Crear un departamento
    @Post()
    async create(@Body() data: CreateDepartmentDto, @Res() res: Response) {
        try {
            const department = await this.departmentService.create(data);
            return res.status(201).json(department);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    // Actualizar un departamento

    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() data: UpdateDepartmentDto,
        @Res() res: Response){
            try {
                const department = await this.departmentService.update(id, data);
                return res.status(200).json(department);
            } catch (error) {
                return res.status(400).json({ message: error.message });
            }
        }


    // Eliminar un departamento
    @Delete(':id')
    async delete(@Param('id') id: string, @Res() res: Response) {
        try {
            const department = await this.departmentService.delete(id);
            return res.status(200).json(department);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

    // Obtener todos los departamentos
    @Get()
    async getAll(@Res() res: Response) {
        try {
            const departments = await this.departmentService.getAll();
            return res.status(200).json(departments);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }


    // Obtener un departamento por id
    @Get(':id')
    async getById(@Param('id') id: string, @Res() res: Response) {
        try {
            const department = await this.departmentService.getById(id);
            return res.status(200).json(department);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}
