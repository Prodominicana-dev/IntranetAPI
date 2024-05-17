import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDepartmentDto, UpdateDepartmentDto} from './dto/department.dto'

@Injectable()
export class DepartmentService {
    constructor(private readonly prismaservice: PrismaService) {}

  // Crear un departamento
  async create(data: CreateDepartmentDto) {
    try {
      const department = await this.prismaservice.department.create({
        data,
      });
      return department;
    } catch (error) {
      console.log(error);
      throw new Error('Error al crear el departamento');
    }
  }

  // Actualizar un departamento
  async update(id: string, data: UpdateDepartmentDto) {
    try {
      const department = await this.prismaservice.department.update({
        where: { id },
        data,
      });
      return department;
    } catch (error) {
      console.log(error);
      throw new Error('Error al  actualizar el departamento');
    }
  }

  // Eliminar un departamento
  async delete(id: string) {
    try {
      const department = await this.prismaservice.department.delete({
        where: { id },
      });
      return department;
    } catch (error) {
      console.log(error);
      throw new Error('Error al eliminar el departamento');
    }
  }

  // Obtener todos los departamentos
  async getAll() {
    try {
      const departments = await this.prismaservice.department.findMany();
      return departments;
    } catch (error) {
      console.log(error);
      throw new Error('Error al obtener los departamentos');
    }
  }

  // Obtener un departamento
  async getById(id: string) {
    try {
      const department = await this.prismaservice.department.findUnique({
        where: { id },
      });
      return department;
    } catch (error) {
      console.log(error);
      throw new Error('Error al obtener el departamento');
    }
  }
}
