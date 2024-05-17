import { Module } from '@nestjs/common';
import { DirectionController } from './direction.controller';
import { DirectionService } from './direction.service';
import { PrismaService } from'src/prisma/prisma.service';

@Module({
  controllers: [DirectionController],
  providers: [DirectionService,PrismaService]
})
export class DirectionModule {}
