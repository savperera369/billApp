import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { BsSave } from "react-icons/bs";

const BillTemplate = () => {
    return (
        <div className="bg-gray-100 rounded-xl p-4 shadow-md flex flex-col gap-y-4 w-full hover:shadow-2xl">
            <p className="text-xl text-slate-500 font-bold text-center">Bill Title</p>
            <p className="text-md text-slate-500 text-center">
                This bill is about the recent changes in tariffs in Canada and Mexico.
                As things stand we are pausing the imposing of these massive tariffs on
                our Trans-NAFTA counterparts as we fear this may negatively impact our relation
                with these countries.
            </p>
            <div className="flex items-center gap-x-4 px-8">
                <SlLike className="h-4 w-4" />
                <SlDislike className="h-4 w-4" />
                <BsSave className="h-4 w-4" />
            </div>
        </div>
    );
}

export default BillTemplate;