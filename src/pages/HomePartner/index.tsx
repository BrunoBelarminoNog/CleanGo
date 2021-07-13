import Header from "../../components/Header";
import HeaderNav from "../../components/HeaderNav";

const HomePartner = () => {
  return (
    <>
      <Header>
        <HeaderNav />
      </Header>
      <div>
        Home <a href="/cadastroparceiro">Cadastra-se como parceiro aqui</a>
      </div>
    </>
  );
};

export default HomePartner;
