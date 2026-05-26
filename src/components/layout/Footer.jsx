import Container from "../common/Container";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-10 mt-20">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold">FITCUT</h2>
            <p className="text-gray-400 mt-2">
              Premium video editing agency for fitness coaches.
            </p>
          </div>

          <div className="flex gap-6 text-gray-400">
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
