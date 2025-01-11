
export default function Home() {
  return (
    <div className="flex h-[100vh] w-full justify-center items-center text-center">
      <div className="main h-[550px] w-[850px] grid gap-1 grid-cols-5 bg-gradient p-5 rounded">
        <div className="font-extrabold text-3xl bg-purple-500 row-span-10 text-center rounded">
          AG1
        </div>
        <div className="font-extrabold text-3xl bg-yellow-300 col-span-3 rounded">
          AG2
        </div>
        <div className="font-extrabold text-3xl bg-sky-500 row-span-10 rounded">
          AG3
        </div>
        <div className="g4-g5 col-span-3 row-span-3 grid gap-7 grid-cols-2">
          <div className="font-extrabold text-3xl bg-pink-400 rounded">AG4</div>
          <div className="font-extrabold text-3xl bg-pink-400 rounded">AG5</div>
        </div>
        <div className="font-extrabold text-3xl bg-orange-500 row-span-6 rounded">
          AG6
        </div>
        <div className="g7-g8-g9-g10 col-span-2 row-span-6 grid grid-cols-2">
          <div className="font-extrabold text-3xl bg-yellow-500 col-span-2 rounded">
            AG7
          </div>
          <div className="g8-g9 col-span-2 grid gap-5 grid-cols-2">
            <div className="font-extrabold text-3xl bg-pink-400 rounded">
              AG8
            </div>
            <div className="font-extrabold text-3xl bg-pink-400 rounded">
              AG9
            </div>
          </div>
          <div className="font-extrabold text-3xl bg-pink-600 col-span-2 rounded">
            AG10
          </div>
        </div>
      </div>
    </div>
  );
}
