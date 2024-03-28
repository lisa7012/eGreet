import {
  Tailwind,
  Html,
  Img,
  Container,
  Head,
  Preview,
  Body,
  Heading,
  Section,
  Text,
  Hr,
  Font,
} from '@react-email/components';
import * as React from 'react';
import type { Photo } from '../schemas/Photos';

type EmailProps = {
  photoResult: Photo;
};

const Email = ({ photoResult }: EmailProps) => {
  // TODO: to fix and edit
  return (
    <Tailwind>
      <Html>
        <Head>
          <Font
            fontFamily="Poppins"
            fallbackFontFamily="Arial"
            webFont={{
              url: 'https://fonts.gstatic.com/s/poppins/v21/pxiEyp8kv8JHgFVrJJnecmNE.woff2',
              format: 'woff2',
            }}
            fontWeight={400}
            fontStyle="normal"
          />
        </Head>
        <Preview>John has sent you an eCard!</Preview>
        <Body>
          <Container className="relative overflow-hidden">
            <div className="mt-search-cl">
              {/* <Img
                src="/static/eGreet_logo_color.png"
                alt="eGreet_logo"
                width={157}
                height={73}
              /> */}
              <Img
                src="http://localhost:3000/static/eGreet_logo_color.png"
                alt="eGreet_logo"
                width={157}
                height={73}
              />
            </div>
            <Heading className="mb-0.5 text-5xl font-medium">Hi Jane,</Heading>
            <Text className="mb-6 mt-0 text-lg font-normal ">
              You have received an e-card from John Doe!
            </Text>
            <Section className=" relative mb-32 flex flex-col items-center">
              <Img
                src="/static/eCard_preview.png"
                alt="eCard"
                width={555}
                height={765}
                className="self-center"
              />
            </Section>
            <Img
              src="/static/eGreet_logo_bottom.png"
              alt="eGreet_logo_bottom"
              width={500}
              height={500}
              className="absolute bottom-[-250px] right-[-200px] -z-1"
            />
            <Hr />
            <div className="flex">
              <Img
                src="/static/eGreet_logo_gray.png"
                alt="eGreet_logo_gray"
                width={157}
                height={73}
              />
              <div className="flex flex-col justify-center">
                <Text className="mb-0 text-center">
                  Visit eGreet to send free eCards today!
                </Text>
                <Text className="mt-0 text-center">
                  ©2024 | www.eGreet.vercel.app
                </Text>
              </div>
            </div>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};

export default Email;
