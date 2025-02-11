import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";

const BillTemplate = () => {
    return (
        <div className="bg-gray-100 rounded-md p-4 shadow-md flex flex-col gap-y-4 w-full">
            <p className="text-xl text-slate-500 font-bold text-center">Bill Title</p>
            <p className="text-sm text-slate-500">
                This bill is about the recent changes in tariffs in Canada and Mexico.
                As things stand we are pausing the imposing of these massive tariffs on
                our Trans-NAFTA counterparts as we fear this may negatively impact our relation
                with these countries.
            </p>
            <div className="flex items-center gap-x-4">
                <SlLike className="h-4 w-4" />
                <SlDislike className="h-4 w-4" />
            </div>
        </div>
    );
}

export default BillTemplate;