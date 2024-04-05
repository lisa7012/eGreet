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
  Button,
} from '@react-email/components';
import * as React from 'react';
import { testImgSrc } from './testImg';

type ECardEmailProps = {
  name: string;
  recipientName: string;
  cardImgSrc: string;
  photoId: number;
};

const ECardEmail = ({
  name,
  recipientName,
  cardImgSrc,
  photoId,
}: ECardEmailProps) => {
  //TODO: to fix when after deploying
  const baseURL =
    process.env.NODE_ENV === 'production' ? 'https://eGreet.vercel.app' : '';

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
            {/* <Heading className="mb-0.5 text-5xl font-medium">
              Hi {recipientName},
            </Heading> */}
            <Text className="mb-0.5 text-5xl font-medium">
              Hi {recipientName},
            </Text>
            <Text className="mb-6 mt-0 text-lg font-normal ">
              You have received an eCard from {name}!
            </Text>
            <Section className=" relative mb-20 flex flex-col items-center">
              <Section className="">
                <Button
                  className="leading-0 mb-8 h-[35px] w-[285px] rounded-md bg-[#DD415B] pt-[15px] text-center text-[15px] text-white shadow-md"
                  href={`${baseURL}/recipient/${photoId}`}
                >
                  View and download in browser
                </Button>
              </Section>
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
            {/* <div className="flex">
              <Img
                src={`${baseURL}/static/eGreet_logo_gray.png`}
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
  cardImgSrc: testImgSrc,
};
