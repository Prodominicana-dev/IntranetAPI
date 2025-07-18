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
import { LanguageModule } from './language/language.module';
import { PersonalReferenceModule } from './personal-reference/personal-reference.module';
import { ProfessionalReferenceModule } from './professional-reference/professional-reference.module';
import { CategoryModule } from './category/category.module';
import { VacancyModule } from './vacancy/vacancy.module';
import { ApplicationModule } from './application/application.module';
import { DegreeModule } from './degree/degree.module';
import { CarrersModule } from './carreers/carriers .module';
import { DirectionModule } from './direction/direction.module';
import { PollcategoryModule} from './pollcategory/pollcategory.module';
import { DepartmentModule } from './department/department.module';
import { PollquestionModule } from './pollquestion/pollquestion.module';
import { CvModule } from './cv/cv.module';
import { MailService } from './mail/mail.service';
import { MailController } from './mail/mail.controller';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [UserModule, RelationshipModule, QuestionModule, QuestionOptionModule, AnswerModule, WorkExperienceModule, EducationModule, DegreeModule, LanguageModule, PersonalReferenceModule, ProfessionalReferenceModule, CategoryModule, VacancyModule, ApplicationModule, CarrersModule, DirectionModule, PollcategoryModule, DepartmentModule, PollquestionModule, CvModule, MailModule],
  controllers: [AppController, MailController],
  providers: [AppService, MailService],
})
export class AppModule {}
