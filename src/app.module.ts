import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { RelationshipModule } from './relationship/relationship.module';
import { QuestionModule } from './question/question.module';
import { QuestionOptionModule } from './question-option/question-option.module';
import { AnswerModule } from './answer/answer.module';
import { WorkExperienceModule } from './work-experience/work-experience.module';
import { EducationModule } from './education/education.module';
import { GradeModule } from './grade/grade.module';
import { LanguageModule } from './language/language.module';
import { PersonalReferenceModule } from './personal-reference/personal-reference.module';
import { ProfessionalReferenceModule } from './professional-reference/professional-reference.module';
import { CategoryModule } from './category/category.module';
import { VacancyModule } from './vacancy/vacancy.module';
import { ApplicationModule } from './application/application.module';

@Module({
  imports: [UserModule, RelationshipModule, QuestionModule, QuestionOptionModule, AnswerModule, WorkExperienceModule, EducationModule, GradeModule, LanguageModule, PersonalReferenceModule, ProfessionalReferenceModule, CategoryModule, VacancyModule, ApplicationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
