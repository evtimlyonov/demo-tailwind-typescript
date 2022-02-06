interface Props {
  children: JSX.Element;
}
export const MainContainer = ({ children }: Props) => {
  return (
    <main className='flex flex-col min-h-[calc(100vh-3.5rem-8rem)]'>
      {children}
    </main>
  );
};
