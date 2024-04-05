'use server';
import env from './lib/env';
import { FormDataSchema, FormInputs } from './schemas/FormData';
import ECardEmail from './emails/ecard-email';
import { render } from '@react-email/render';

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: env.SENDER_EMAIL,
    pass: env.APP_PASSWORD,
  },
});

export const sendEmail = async (
  data: FormInputs,
  cardImgSrc: string,
  photoId: number,
  // fontStyle: string,
  // fontColor: string,
  // backgroundColor: string,
  // message: string,
) => {
  const result = FormDataSchema.safeParse(data);

  if (result.success) {
    const { name, recipientName, recipientEmail } = result.data;

    const emailHtml = render(
      ECardEmail({ name, recipientName, cardImgSrc, photoId }),
    );

    const mailOptions = {
      from: {
        name: 'eGreet',
        address: env.SENDER_EMAIL,
      },
      to: recipientEmail,
      subject: `${name} has sent you an eCard!`,
      html: emailHtml,
    };

    try {
      await transporter.sendMail(mailOptions);
      return { success: true, data };
    } catch (e) {
      return { success: false, data };
    }
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }
};
