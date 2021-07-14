import Helmet from "react-helmet";

interface TitlePageProps {
  title: string;
}
const TitlePage = ({ title }: TitlePageProps) => {
  return <Helmet title={`CleanGo | ${title}`} />;
};

export default TitlePage;
