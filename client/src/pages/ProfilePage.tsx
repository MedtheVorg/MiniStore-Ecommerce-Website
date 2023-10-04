import Avatar from 'boring-avatars';
import { useSelector } from 'react-redux';
import { StoreType } from '../redux/reduxStore';
import History from '../containers/Main/components/History';

const ProfilePage = () => {
  const user = useSelector((state: StoreType) => state.userState.user);

  return (
    <>
      <History />
      <section className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center  justify-center gap-8 py-20">
        <Avatar
          name={`${user?.username} ${user?.email} ${user?._id}`}
          size={300}
          colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
          variant="beam"
        />
        <div className="text-2xl">
          <p className="mb-10">_id : {user?._id}</p>
          <p>Email : {user?.email}</p>
        </div>
      </section>
    </>
  );
};
export default ProfilePage;
