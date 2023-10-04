const HomeLoader = () => {
  return (
    <dialog
      className="fixed top-0 left-0 bottom-0 right-0 h-screen w-screen  grid place-content-center z-50 overflow-hidden  open:bg-dark"
      open
    >
      <p className="w-[80px] h-[80px] border-8 border-b-semiBlue rounded-full animate-spin"></p>
    </dialog>
  );
};
export default HomeLoader;
