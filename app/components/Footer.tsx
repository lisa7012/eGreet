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
      ©2024 | designed by Victoria Marins & developed by Lisa Duong
    </footer>
  );
};

export default Footer;
