import BillTemplate from "../components/BillTemplate.jsx";

const Home = () => {
    return (
        <div className="flex flex-col items-center gap-y-4 w-1/2 overflow-scroll mx-auto">
            <p className="text-3xl font-bold text-slate-500">Popular Bills</p>
            <BillTemplate />
            <BillTemplate />
            <BillTemplate />
            <BillTemplate />
        </div>
    );
}

export default Home;