import {
  Tailwind,
  Html,
  Img,
  Container,
  Head,
  Body,
  Heading,
  Section,
  Text,
  Hr,
  Font,
  Link,
} from '@react-email/components';
import * as React from 'react';
import { testImgSrc } from './testImg';

type ECardEmailProps = {
  name: string;
  recipientName: string;
  cardImgSrc: string;
};

const ECardEmail = ({ name, recipientName, cardImgSrc }: ECardEmailProps) => {
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
        {/* <Preview>A special card sent from eGreet!</Preview> */}
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
            {/* <Heading className="mb-0.5 text-5xl font-medium">
              Hi {recipientName},
            </Heading> */}
            <Text className="mb-0.5 text-5xl font-medium">
              Hi {recipientName},
            </Text>
            <Text className="mb-6 mt-0 text-lg font-normal ">
              You have received an eCard from {name}!
            </Text>
            <Section className=" relative mb-32 flex flex-col items-center">
              <Img
                src={cardImgSrc}
                alt="eCard"
                width={555}
                height={765}
                className="self-center"
                datatype="DataUri"
              />
            </Section>
            {/* <Img
              src="/static/eGreet_logo_bottom.png"
              alt="eGreet_logo_bottom"
              width={500}
              height={500}
              className="absolute bottom-[-250px] right-[-200px] -z-1"
            /> */}
            <Hr />
            {/* <div className="flex">
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
                  ©2024 |&nbsp;
                  // TODO: to update when the app is deployed
                  <Link href="https://github.com/lisa7012/eGreet">
                    www.eGreet.vercel.app
                  </Link>
                </Text>
              </div>
            </div> */}
            <Img
              src="/static/eGreet_logo_gray.png"
              alt="eGreet_logo_gray"
              width={157}
              height={73}
            />
            <Text className="mb-0 inline-block">
              Visit eGreet to send free eCards today!
            </Text>
            <Text className="mt-0 ">
              ©2024 |&nbsp;
              <Link href="https://github.com/lisa7012/eGreet">
                www.eGreet.vercel.app
              </Link>
            </Text>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};

export default ECardEmail;

ECardEmail.PreviewProps = {
  name: 'John',
  recipientName: 'Jane',
};
