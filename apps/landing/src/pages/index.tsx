import Layout from "@/components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCopy, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";

export default function HomePage() {
    const [copied, setCopied] = useState(false);

    return <Layout>
        <div className="alert flex flex-row bg-white border-2 border-yellow-500 md:text-sm">
            <FontAwesomeIcon icon={faInfoCircle} fixedWidth />
            <span>Razuberri is in development. Expect bugs.</span>
        </div>
        <div className="hero h-[55vh] md:h-[70vh]">
            <div className="hero-content flex-col">
                <h1 className="font-bold md:text-6xl text-4xl text-center">Manage. Monitor. Deploy.</h1>
                <h3>No tracking, no paying, no hassle.</h3>
                <p>Manage your raspberry pi clusters with a simple to use dashboard instead of manually SSH&apos;ing and maintaining each one individually.</p>
                <div className="mockup-code text-sm w-[20rem] md:w-[40rem] mt-4">
                    <div className="flex flex-row justify-between">
                        <pre data-prefix="$">
                            <code>curl razuberri.nico.engineer/s/install.sh</code>
                        </pre>
                        <FontAwesomeIcon icon={copied ? faCheck : faCopy} className={`cursor-pointer mx-6 ${copied ? "text-green-500" : 'text-white'}`} onClick={() => {
                            navigator.clipboard.writeText("curl razuberri.nico.engineer/s/install.sh");
                            setCopied(true);
                            setTimeout(() => {
                                setCopied(false);
                            }, 2_500);
                        }} fixedWidth />
                    </div>
                    <pre data-prefix=">" className="text-warning"><code>Installing...</code></pre>
                    <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
                </div>
                <Link href="/install"><button className="btn btn-primary">Learn More</button></Link>
            </div>
        </div>
    </Layout>
}