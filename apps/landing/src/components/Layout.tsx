import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout(props: { children: React.ReactNode }) {
    return <div className="drawer h-fit flex flex-col">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col my-4 md:mx-32 mx-4 gap-4">
            <div className="w-full">
                <Navbar />
            </div>
            {props.children}
        </div>
        <Footer />
        <Sidebar />
    </div>
}