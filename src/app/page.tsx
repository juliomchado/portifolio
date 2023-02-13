import { Header } from '@/components/Header';
import '../styles/global.scss';

import ImageSection from '@/components/ImageSection';

import style from './style.module.scss';
import AboutMeSection from '@/components/AboutMeSection';
import ProjectsSection from '@/components/ProjectsSection';
import TechnologySection from '@/components/TechnologySection';
import ContactsSection from '@/components/ContactsSection';

export default function Home() {
  return (
    <>
      <Header />
      <main className={style.mainStyle}>
        <ImageSection />
        <AboutMeSection />
        <ProjectsSection />
        <TechnologySection />
        <ContactsSection />
      </main>
    </>
  );
}
