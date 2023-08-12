import Layout from "@/components/Layout";
import Container from "../components/legal/Container";
import Heading from "../components/legal/Heading";
import Paragraph from "../components/legal/Paragraph";

export default function PrivacyPolicy() {
    return (
        <Layout>
            <Container>
                <h1 className="my-8">Razuberri Privacy Policy</h1>
                <div className="divider" />

                <Heading>Introduction</Heading>
                <Paragraph>
                    Welcome to Razuberri&apos;s Privacy Policy. This policy details our commitment to protecting the privacy of individuals who use the Razuberri service.
                </Paragraph>

                <Heading>Data We Don&apos;t Collect</Heading>
                <Paragraph>
                    Given the nature of Razuberri, we don&apos;t collect any personal data or information from our users. The service is designed to operate without collecting, processing, or storing any data related to its users.
                </Paragraph>

                <Heading>Self-hosted Service</Heading>
                <Paragraph>
                    Since Razuberri is self-hosted on your server, all data generated or utilized during your use of the Service stays exclusively on your server and within your control.
                </Paragraph>
                <Paragraph>
                    We have no access to, nor control over, any data on your server. The responsibility for ensuring the security and integrity of this data rests entirely with the user.
                </Paragraph>

                <Heading>Third-Party Links</Heading>
                <Paragraph>
                    The Service may contain links to third-party websites or services that are not owned or controlled by Razuberri. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that Razuberri shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
                </Paragraph>

                <Heading>Changes to This Privacy Policy</Heading>
                <Paragraph>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the updated policy on this page. You are advised to review this policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                </Paragraph>

                <Heading>Contact Us</Heading>
                <Paragraph>
                    For any questions about this Privacy Policy, please contact us at [Your Company Contact Information].
                </Paragraph>
            </Container>
        </Layout>
    );
}
