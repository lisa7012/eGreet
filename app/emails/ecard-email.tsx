import {
  Tailwind,
  Html,
  Img,
  Container,
  Head,
  Body,
  Section,
  Text,
  Hr,
  Font,
  Link,
  Row,
  Column,
} from '@react-email/components';
import * as React from 'react';
import { testImgSrc } from './testImg';

type ECardEmailProps = {
  senderName: string;
  recipientName: string;
  cardImgSrc: string;
  recipientParams: string;
};

const ECardEmail = ({
  senderName,
  recipientName,
  cardImgSrc,
  recipientParams,
}: ECardEmailProps) => {
  const baseURL =
    process.env.NODE_ENV === 'production'
      ? 'https://eGreet.vercel.app'
      : 'http://localhost:3000';

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
        <Body>
          <Container className="relative overflow-hidden">
            <div className="mt-search-cl">
              <Img
                src={`${baseURL}/static/eGreet_logo_color.png`}
                alt="eGreet_logo"
                width={157}
                height={73}
              />
            </div>
            <Text className="mb-0.5 text-5xl font-medium">
              Hi {recipientName},
            </Text>
            <Text className="mb-5 mt-0 text-lg font-normal">
              Here is your special eCard from {senderName}!
            </Text>
            <Section className=" relative mb-[30px] flex flex-col items-center">
              <Row className="mb-2.5">
                <Column align="right">
                  <Link
                    className="text-end text-[15px] italic text-[#DD415B] underline"
                    href={`${baseURL}/recipient/${recipientParams}`}
                  >
                    view and download in browser
                  </Link>
                </Column>
              </Row>
              <Img
                src={cardImgSrc}
                alt="eCard"
                width={555}
                height={765}
                className="self-center"
                datatype="DataUri"
              />
            </Section>
            <Hr />
            <Row className="inline-flex">
              <Column width="33%">
                <Img
                  src={`${baseURL}/static/eGreet_logo_gray.png`}
                  alt="eGreet_logo_gray"
                  width="auto"
                  height="auto"
                />
              </Column>
              <Column width="33%">
                <Text className="mb-0 pt-0 text-center">
                  Visit eGreet to send free <br />
                  eCards today! &nbsp;©2024&nbsp;|&nbsp;
                  <Link
                    href="https://github.com/lisa7012/eGreet"
                    className="text-[#DD415B]"
                  >
                    www.eGreet.vercel.app
                  </Link>
                </Text>
              </Column>
              <Column width="33%">&nbsp;&nbsp;&nbsp;</Column>
            </Row>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};

export default ECardEmail;

ECardEmail.PreviewProps = {
  senderName: 'John',
  recipientName: 'Jane',
  cardImgSrc: testImgSrc,
};
