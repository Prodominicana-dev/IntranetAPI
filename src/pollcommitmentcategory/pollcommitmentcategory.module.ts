import { Module } from '@nestjs/common';
import { PollcommitmentcategoryController } from './pollcommitmentcategory.controller';
import { PollcommitmentcategoryService } from './pollcommitmentcategory.service';
import { PrismaService } from'src/prisma/prisma.service';

@Module({
  controllers: [PollcommitmentcategoryController],
  providers: [PollcommitmentcategoryService,PrismaService]
})
export class PollcommitmentcategoryModule {}
