import { HandRaisedIcon } from '@heroicons/react/24/outline';
import { playfairDisplay } from '@/app/ui/fonts';

export default function HavenLogo() {
  return (
    <div
      className={`${playfairDisplay.className} flex flex-row items-center leading-none text-white`}
    >
      <HandRaisedIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[32px]">Handcrafted Haven</p>
    </div>
  );
}
