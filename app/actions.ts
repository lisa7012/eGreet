'use server';
import env from './lib/env';
import { FormDataSchema, FormInputs } from './schemas/FormData';
import ECardEmail from './emails/ecard-email';
import { render } from '@react-email/render';
import { CardCustomization } from './components/Card';
import ECardGmail from './emails/ecard-gmail';

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

type CardCustomizationValues = {
  photoId: number;
  cardImgSrc: string;
  customizationValues: CardCustomization;
};

export const sendEmail = async (
  data: FormInputs,
  cardCustomization: CardCustomizationValues,
) => {
  const result = FormDataSchema.safeParse(data);

  if (result.success) {
    const { senderName, recipientName, recipientEmail } = result.data;
    const {
      photoId,
      cardImgSrc,
      customizationValues: { fontStyle, fontColor, backgroundColor, message },
    } = cardCustomization;

    const recipientParams = `${photoId}?senderName=${senderName}&recipientName=${recipientName}&fontStyle=${fontStyle}&fontColor=${fontColor}&backgroundColor=${backgroundColor}&message=${message}`;

    const emailParts = recipientEmail.split('@');

    const emailHtml =
      emailParts[1] !== ('gmail.com' || 'googlemail.com' || 'google.com')
        ? render(
            ECardEmail({
              senderName,
              recipientName,
              cardImgSrc,
              recipientParams,
            }),
          )
        : render(ECardGmail({ senderName, recipientName, recipientParams }));

    const mailOptions = {
      from: {
        name: 'eGreet',
        address: env.SENDER_EMAIL,
      },
      to: recipientEmail,
      subject: `${senderName} has sent you an eCard!`,
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
