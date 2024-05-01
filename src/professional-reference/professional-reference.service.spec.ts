import { Test, TestingModule } from '@nestjs/testing';
import { ProfessionalReferenceService } from './professional-reference.service';

describe('ProfessionalReferenceService', () => {
  let service: ProfessionalReferenceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfessionalReferenceService],
    }).compile();

    service = module.get<ProfessionalReferenceService>(ProfessionalReferenceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
