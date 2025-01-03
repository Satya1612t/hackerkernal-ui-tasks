type Props = {}

function Quote({ }: Props) {
  return (
    <>
      <div className="hidden lg:block">
        <div className=" h-screen max-w-full flex items-center justify-center bg-slate-100 ">
          <div className="max-w-96 text-wrap text-left border border-black px-2 ">
            <h1 className="font-medium text-xl leading-tight">"Education is not solely about earning a great living. It means living a great life."</h1>
            <h1 className="mt-2 font-medium">Jules Winnefield</h1>
            <h1 className="font-light text-sm">CEO Acme Inc</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Quote