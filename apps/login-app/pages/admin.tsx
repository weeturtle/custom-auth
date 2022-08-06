import { withSessionSsr } from "../lib/withSession";
export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req }) {
    if (req.session === undefined) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        user: req.session.user,
      },
    };
  },
);
const admin = ({ user } : any) => {
  return(
    <>
    <p> {user.id} </p>
    </>
  )
}
export default admin;