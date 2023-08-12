import Footer from "./Footer";
import Navbar from "./Navbar";

export default function DashLayout(props: { children: React.ReactNode }) {
    return <div className="flex justify-center my-8">
        <div className="flex flex-col w-4/5 gap-6">
            <Navbar />
            <div className="min-h-[65vh]">
                {props.children}
            </div>
            <Footer />
        </div>
    </div>
}