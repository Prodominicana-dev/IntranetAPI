import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { MailService } from './mail.service';
import { ApprovedUDto } from './dto/ApprovedU.dto'


@Controller('v1/mail')
export class MailController {
  constructor(private mailService: MailService) { }


  @Post('Approved')
  async Approved(
    @Body() data: ApprovedUDto
  ) {
    console.log('data', data);

    return this.mailService.Approved(
      data.email,
      data.UserName
    );
    //josegarcia@prodominicana.gob.do
    //contact@prodominicana.gob.do
  }


  
}





