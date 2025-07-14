import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { MailService } from './mail.service';
import { ApprovedUDto } from './dto/ApprovedU.dto'
import { ApplyNoifyUDto } from './dto/ApplyNotify.dto'


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

  @Post('ApplyNotify')
  async ApplyNotify(
    @Body() data: ApplyNoifyUDto
  ) {
    // console.log('data', data);

    return this.mailService.ApplyNotify(
      'josegarcia@prodominicana.gob.do',
      data.email,
      data.UserName,
      data.telephone,
      data.phone,
      data.VacancyName
    );
    //josegarcia@prodominicana.gob.do
    //tatianalorenzo@prodominicana.gob.do este correo es que se debe poner arriba
  }


  
}





