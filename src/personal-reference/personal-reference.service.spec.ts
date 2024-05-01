import { Test, TestingModule } from '@nestjs/testing';
import { PersonalReferenceService } from './personal-reference.service';

describe('PersonalReferenceService', () => {
  let service: PersonalReferenceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonalReferenceService],
    }).compile();

    service = module.get<PersonalReferenceService>(PersonalReferenceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
