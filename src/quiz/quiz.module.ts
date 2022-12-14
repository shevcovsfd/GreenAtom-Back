import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmailSenderModule } from 'src/email-sender/email-sender.module';
import { UserModule } from 'src/user/user.module';
import { VacancyModule } from 'src/vacancy/vacancy.module';
import { QuizAnswersEntity } from './entities/quiz-answers.entity';
import { QuizQuestionsEntity } from './entities/quiz-questions.entity';
import { QuizQuestionController } from './quiz.controller';
import { QuizQuestionService } from './quiz.service';
require('dotenv').config();

@Module({
  imports: [
      TypeOrmModule.forFeature([QuizQuestionsEntity, QuizAnswersEntity]),
      UserModule,
      VacancyModule,
      EmailSenderModule
  ],
  controllers: [QuizQuestionController],
  providers: [QuizQuestionService],
  exports: []
})
export class QuizModule {}
