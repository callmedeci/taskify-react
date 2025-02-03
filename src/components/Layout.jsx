import { Outlet } from 'react-router';
import Header from '../pages/Header';
import Footer from '../pages/Footer';

function Layout() {
  return (
    <section className='grid h-dvh w-full grid-rows-[auto_1fr] gap-14 bg-zinc-800 text-zinc-200'>
      <Header />

      <div className='mx-auto h-full w-full max-w-6xl overflow-y-auto'>
        <main className='p-5'>
          <Outlet />
        </main>
      </div>

      <Footer />
    </section>
  );
}

export default Layout;
