import { Test, TestingModule } from '@nestjs/testing';
import { ProfessionalReferenceController } from './professional-reference.controller';

describe('ProfessionalReferenceController', () => {
  let controller: ProfessionalReferenceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfessionalReferenceController],
    }).compile();

    controller = module.get<ProfessionalReferenceController>(ProfessionalReferenceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
