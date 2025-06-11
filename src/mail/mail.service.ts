import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import nodemailer from 'nodemailer';

@Injectable()
export class MailService {
    constructor(private mailerService: MailerService) { }

    //esta de debajo
    async Approved(toemail, UserName) {
        try {
            const emailSend = await this.mailerService.sendMail({
                to: toemail,
                subject: `Aplicación aprobada vía el portal empleos.prodominicana.gob.do`,
                template: './UApproved',
                context: {
                    UserName: UserName,
                    email: toemail,
                   
                },

            });
              console.log('emailSend', emailSend);
            return emailSend;

        } catch (error) {
            console.error('Error al enviar el correo:', error.message || error);
        }


    }



}
