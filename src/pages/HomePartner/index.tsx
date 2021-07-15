import Header from "../../components/Header";
import HeaderNav from "../../components/HeaderNav";
import TitlePage from "../../components/TitlePage";

const HomePartner = () => {
  return (
    <>
      <TitlePage title="Funcionário" />

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
