import Link from "next/link";

const footerLinks = {
    "Terms of Service": "/terms-of-service",
    "Privacy Policy": "/privacy-policy",
};

const links = Object.keys(footerLinks).map((key) => (
    <Link className="link-hover link" key={key} href={footerLinks[key as keyof typeof footerLinks]}>
        {key}
    </Link>
));

export default function Footer() {
    return (
        <div className="flex justify-center">
            <footer className="footer footer-center border-t-2 border-gray-400 w-5/6 md:w-3/5 py-8">
                <div className="flex flex-col">
                    <div className="flex flex-col space-x-0 text-md md:flex-row md:space-x-8">
                        {links}
                    </div>
                    <div className="flex flex-col space-x-0 text-md md:flex-row md:space-x-8">
                        <a className="link-hover link" href="mailto:me@nico.engineer">Need help? Reach out at me@nico.engineer.</a>
                    </div>
                </div>
                <div>
                    <p>
                        Copyright © 2023 - All right reserved by{" "}
                        <a
                            href="https://github.com/yoki-labs"
                            className="link-hover link font-bold"
                        >
                            Yoki Labs
                        </a>
                    </p>
                </div>
            </footer>
        </div>
    );
}