import { IBoard } from '@/interface/board'


export default function PostsNav({ boards }: { boards: IBoard[] }) {
    return (
        <div className=' mt-16'>
            <div className="border-b border-slate-800 pb-6 mb-10">
                <div className="text-center md:text-left md:flex justify-between items-center">

                    {/* Left: Links */}
                    <ul className="grow inline-flex flex-wrap text-sm font-medium -mx-3 -my-1">
                        <li className="px-3 py-1">
                            <a className="text-slate-500 hover:text-slate-200 transition duration-150 ease-in-out" href="/board">
                                <span>ALL</span>
                            </a>
                        </li>
                        {boards.map(board =>
                            <li key={board.id} className="px-3 py-1">
                                <a className="text-indigo-500 relative transition duration-150 ease-in-out" href={`/board?type=${board.id}`}>
                                    <span>{board.title}</span>
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}
