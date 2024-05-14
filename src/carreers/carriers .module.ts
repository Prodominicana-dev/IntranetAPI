import { Module } from '@nestjs/common';
import { CarreersController } from './carriers .controller';
import { CarreersService } from './carriers .service';
import { PrismaService } from'src/prisma/prisma.service';


@Module({
  controllers: [CarreersController],
  providers: [CarreersService, PrismaService]
})
export class CarrersModule {}
