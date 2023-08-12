import Layout from "@/components/Layout";
import Container from "../components/legal/Container";
import Heading from "../components/legal/Heading";
import Paragraph from "../components/legal/Paragraph";

export default function TOS() {
    return (
        <Layout>
            <Container>
                <h1 className="my-8">Razuberri Terms of Service</h1>
                <div className="divider" />

                <Heading>1. Acceptance of Terms</Heading>
                <Paragraph>
                    By accessing or using the Razuberri service (&quot;Service&quot;), you signify that you have read, understood, and agreed to be bound by this Terms of Service (&quot;Terms&quot;). If you do not agree with any of these terms, you are prohibited from using or accessing this Service.
                </Paragraph>

                <Heading>2. No Data Collection</Heading>
                <Paragraph>
                    2.1. Razuberri is designed to prioritize user privacy. We do not collect, process, or store any data related to you or your use of the Service.
                </Paragraph>
                <Paragraph>
                    2.2. Since the Service is self-hosted on your server, any and all data generated or utilized during your use of the Service remains exclusively on your server and within your control.
                </Paragraph>

                <Heading>3. Self-hosting Responsibilities</Heading>
                <Paragraph>
                    3.1. You acknowledge and agree that you are solely responsible for the installation, maintenance, and security of the Service on your server.
                </Paragraph>
                <Paragraph>
                    3.2. Razuberri shall not be held responsible or liable for any issues, data loss, or breaches that arise due to your self-hosting practices.
                </Paragraph>

                <Heading>4. License</Heading>
                <Paragraph>
                    Subject to these Terms, Razuberri grants you a non-transferable, non-exclusive, revocable license to use the Service for your personal or commercial purposes.
                </Paragraph>

                <Heading>5. Termination</Heading>
                <Paragraph>
                    We reserve the right to discontinue or modify the Service at any time without notice.
                </Paragraph>

                <Heading>6. Disclaimers</Heading>
                <Paragraph>
                    6.1. The Service is provided &quot;as is&quot; and &quot;as available&quot; without any warranties of any kind, either express or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
                </Paragraph>
                <Paragraph>
                    6.2. Razuberri makes no warranty that the Service will meet your requirements, be safe, secure, uninterrupted, timely, accurate, or error-free, or that your information will be secure.
                </Paragraph>

                <Heading>7. Limitation of Liability</Heading>
                <Paragraph>
                    To the fullest extent permitted by law, in no event shall Razuberri be liable for any damages, including, but not limited to, direct, indirect, incidental, special, consequential, or exemplary damages, arising out of or in connection with the Service or these Terms.
                </Paragraph>

                <Heading>8. General</Heading>
                <Paragraph>
                    8.1. These Terms are governed by and construed in accordance with the laws of the jurisdiction in which Razuberri is based, without regard to its conflict of law provisions.
                </Paragraph>
                <Paragraph>
                    8.2. Our failure to enforce any right or provision of these Terms will not be deemed a waiver of such right or provision. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
                </Paragraph>
                <Paragraph>
                    8.3. We may update these Terms from time to time. Changes will be effective upon posting the updated Terms on this page.
                </Paragraph>

                <Heading>Contact Information</Heading>
                <Paragraph>
                    For any questions about these Terms, please contact us at me@nico.engineer.
                </Paragraph>
            </Container>
        </Layout>
    );
}
