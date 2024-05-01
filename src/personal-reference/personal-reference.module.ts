import { Module } from '@nestjs/common';
import { PersonalReferenceController } from './personal-reference.controller';
import { PersonalReferenceService } from './personal-reference.service';

@Module({
  controllers: [PersonalReferenceController],
  providers: [PersonalReferenceService]
})
export class PersonalReferenceModule {}
