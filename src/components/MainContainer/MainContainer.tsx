interface Props {
  children: JSX.Element;
}
export const MainContainer = ({ children }: Props) => {
  return (
    <main className='flex flex-col min-h-[calc(100vh-5.2rem)]'>{children}</main>
  );
};
