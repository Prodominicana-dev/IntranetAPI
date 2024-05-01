import { Test, TestingModule } from '@nestjs/testing';
import { PersonalReferenceController } from './personal-reference.controller';

describe('PersonalReferenceController', () => {
  let controller: PersonalReferenceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonalReferenceController],
    }).compile();

    controller = module.get<PersonalReferenceController>(PersonalReferenceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
