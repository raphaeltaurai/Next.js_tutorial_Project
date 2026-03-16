import HavenLogo from '@/app/ui/haven-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { playfairDisplay } from '@/app/ui/fonts';
import styles from '@/app/ui/home.module.css';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className={styles.shape} />
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-amber-600 p-4 md:h-52">
        {<HavenLogo />}
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-cream-100 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`${playfairDisplay.className} text-xl text-amber-900 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Handcrafted Haven.</strong> Discover unique,
            handcrafted treasures made with love by talented artisans.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-amber-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-amber-500 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
           <Image
              src="/hero-desktop.png"
              width={1000}
              height={760}
              className="hidden md:block"
              alt="Screenshots of the dashboard project showing desktop version"
            />
            <Image
              src="/hero-mobile.png"
              width={560}
              height={620}
              className="block md:hidden"
              alt="Screenshot of the dashboard project showing mobile version"
            />
        </div>
      </div>
    </main>
  );
}
