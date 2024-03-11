import Link from 'next/link';

type FooterProps = {
  textColor: string;
  textOpacity?: string;
};

const Footer = ({ textColor, textOpacity }: FooterProps) => {
  const style =
    `mb-10 mt-11 flex justify-center text-xl font-normal text-center max-mobile:leading-tight max-xl:text-footer-cl ` +
    textColor +
    ` ` +
    textOpacity;
  return (
    <footer className={style}>
      <p>
        ©2024 | designed by&nbsp;
        <Link
          href="https://www.linkedin.com/in/vict%C3%B3ria-marins-4700b01ba?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BHXdYazhwSkC4nyDPNx3pOg%3D%3D"
          target="_blank"
          className="hover:underline"
        >
          Victoria Marins
        </Link>
        &nbsp;& developed by&nbsp;
        <Link
          href="https://lisa7012.github.io/portfolio_v2/"
          target="_blank"
          className="hover:underline"
        >
          Lisa Duong
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
