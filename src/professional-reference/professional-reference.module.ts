import { Module } from '@nestjs/common';
import { ProfessionalReferenceController } from './professional-reference.controller';
import { ProfessionalReferenceService } from './professional-reference.service';

@Module({
  controllers: [ProfessionalReferenceController],
  providers: [ProfessionalReferenceService]
})
export class ProfessionalReferenceModule {}
