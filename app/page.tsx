import MainLayout from "@/components/layout/layout";

const Home = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <MainLayout>
      {children}
    </MainLayout>
  );
}

export default Home;