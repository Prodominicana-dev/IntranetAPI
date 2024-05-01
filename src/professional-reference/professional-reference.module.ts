import { Module } from '@nestjs/common';
import { ProfessionalReferenceController } from './professional-reference.controller';
import { ProfessionalReferenceService } from './professional-reference.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ProfessionalReferenceController],
  providers: [ProfessionalReferenceService, PrismaService]
})
export class ProfessionalReferenceModule {}
