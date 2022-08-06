import { NextPage } from 'next';
import Header from '../components/header/header';
import { withSessionSsr } from "../lib/withSession";

export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req }) {
    if (req.session.user !== undefined) {
      return {
        props:{
          hasUser: true,
        }
      };
    }

    return {
      props: {
        hasUser: false,
      },
    };
  },
);
interface Props {
  hasUser: boolean;
}

const IndexPage: NextPage<Props> = ( props ) => {
  const { hasUser } = props;
  return(
    <>
      <Header hasUser={hasUser}/>
    </>
  )
}
export default IndexPage;