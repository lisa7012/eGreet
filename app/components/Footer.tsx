import Link from 'next/link';

type FooterProps = {
  textColor: string;
  textOpacity?: string;
  linkColor?: string;
  hoverColor?: string;
};

const Footer = ({
  textColor,
  textOpacity,
  linkColor,
  hoverColor,
}: FooterProps) => {
  const style =
    `text-xl font-normal text-center max-mobile:leading-tight max-xl:text-footer-cl ` +
    textColor +
    ` ` +
    textOpacity;

  return (
    <footer className="pt-auto flex justify-center pb-10">
      <p className={style}>
        <sup className="inline-block·self-start·pt-0·text-copyright-cl">©</sup>
        2024 | designed and developed by&nbsp;
        <Link
          href="https://www.linkedin.com/in/vict%C3%B3ria-marins-4700b01ba?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BHXdYazhwSkC4nyDPNx3pOg%3D%3D"
          target="_blank"
          className={`underline ${linkColor} ${hoverColor}`}
        >
          Victoria Marins
        </Link>
        &nbsp;&&nbsp;
        <Link
          href="https://lisa7012.github.io/portfolio_v2/"
          target="_blank"
          className={`underline ${linkColor} ${hoverColor}`}
        >
          Lisa Duong
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
