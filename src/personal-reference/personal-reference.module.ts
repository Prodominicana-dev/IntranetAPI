import { Module } from '@nestjs/common';
import { PersonalReferenceController } from './personal-reference.controller';
import { PersonalReferenceService } from './personal-reference.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PersonalReferenceController],
  providers: [PersonalReferenceService, PrismaService]
})
export class PersonalReferenceModule {}
