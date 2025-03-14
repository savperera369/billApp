import BillTemplate from "../components/BillTemplate.jsx";

const Home = () => {
    return (
        <div className="flex flex-col items-center gap-y-8 w-2/3 mx-auto">
            <p className="text-3xl font-bold text-slate-500 mb-4">Popular Bills</p>
            <BillTemplate />
            <BillTemplate />
            <BillTemplate />
            <BillTemplate />
        </div>
    );
}

export default Home;