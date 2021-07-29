import { useToggle } from '../provider/context';

export default function TopNavigation() {
  const { toggle } = useToggle();
  return (
    <header className="h-20 items-center relative z-10">
      <div className="flex flex-center flex-col h-full justify-center mx-auto relative px-3 text-white z-10">
        <div className="flex items-center pl-1 relative w-full sm:ml-0 sm:pr-2 lg:max-w-68">
          <div className="flex group h-full items-center relative w-12">
            <button
              type="button"
              aria-expanded="false"
              aria-label="Toggle sidenav"
              onClick={toggle}
              className="text-4xl text-white focus:outline-none"
            >
              &#8801;
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
