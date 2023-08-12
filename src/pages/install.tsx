import Layout from "@/components/landing/Layout";
import { useCallback, useState } from "react";

function SpecialCode(props: { children: React.ReactNode }) {
    return <code className="bg-gray-200 rounded-xl text-black px-2 py-1">{props.children}</code>
}

function Section(props: { children: React.ReactNode }) {
    return <div className="flex flex-col gap-4">
        {props.children}
    </div>
}

const steps = {
    "Main": <Section>
        <h2>Installing on the <SpecialCode>main</SpecialCode> node</h2>

        <Section>
            <h4>1. Run the install script</h4>
            <p>Run the following command on the <SpecialCode>main</SpecialCode> node:</p>
            <SpecialCode>
                curl -sSL razuberri.nico.engineer/s/main.sh | bash
            </SpecialCode>
        </Section>

        <Section>
            <h4>2. Open up the panel</h4>
            <p>Open up the panel by going to <SpecialCode>http://localhost:5555</SpecialCode> (if you are SSH&apos;d into the server) or <SpecialCode>http://YOUR_SERVER_IP:5555</SpecialCode> in your browser.</p>
        </Section>

        <Section>
            <h4>3. Complete setup</h4>
            <p>Complete the setup by following the instructions on the panel. You&apos;ll be prompted to set a domain, add/invite users, and add child nodes.</p>
        </Section>
    </Section>,
    "Child": <Section>
        <h2>Installing on a <SpecialCode>child</SpecialCode> node</h2>

        <Section>
            <h4>1. Open up your dashboard</h4>
            <p>Open up your dashboard by going to the URL you configured on setup.</p>
        </Section>

        <Section>
            <h4>2. Add a child node</h4>
            <p>Click on the <SpecialCode>Nodes</SpecialCode> tab on the left, and click <SpecialCode>Add Node</SpecialCode>. Fill out the form with the information of the child node.</p>
        </Section>

        <Section>
            <h4>3. Run the install script</h4>
            <p>Run the following command on the <SpecialCode>child</SpecialCode> node:</p>
            <SpecialCode>
                curl -sSL razuberri.nico.engineer/s/child.sh | bash
            </SpecialCode>
        </Section>

        <Section>
            <h4>4. Verify setup</h4>
            <p>Revisit your dashboard and you&apos;ll see the newly added server is live on your dashboard.</p>
        </Section>

    </Section>
}

const stepLabels = ["Main", "Child"]

export default function Install() {
    const [step, _setStep] = useState(stepLabels[0]);

    const setStep = useCallback((step: string) => {
        return () => _setStep(step);
    }, []);

    return <Layout>
        <div className="flex flex-col gap-6">
            <ul className="menu menu-vertical menu-horizontal bg-base-200 rounded-box gap-1">
                {stepLabels.map((label) => (
                    <li className={`${step === label ? "bg-gray-300" : ""} rounded-lg`} onClick={setStep(label)} key={label}><a>{label}</a></li>
                ))}
            </ul>
            <div className="flex flex-col">
                {steps[step as keyof typeof steps]}
            </div>
        </div>
    </Layout>
}