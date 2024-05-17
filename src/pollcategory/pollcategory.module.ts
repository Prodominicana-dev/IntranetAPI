import { Module } from '@nestjs/common';
import { PollcategoryController } from './pollcategory.controller';
import { PollcategoryService } from './pollcategory.service';
import { PrismaService } from'src/prisma/prisma.service';

@Module({
  controllers: [PollcategoryController],
  providers: [PollcategoryService,PrismaService]
})
export class PollcategoryModule {}
