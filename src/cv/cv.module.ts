import { Module } from '@nestjs/common';
import { CvController } from './cv.controller';
import { CvService } from './cv.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CvController],
  providers: [CvService, PrismaService],
  exports: [CvService],
})
export class CvModule {}
