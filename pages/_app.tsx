import App from "next/app";
import Layout from "../components/layout";
import "../styles/globals.css"

export default class ExcursionApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <Layout>
                <Component {...pageProps} />
            </Layout>
        );
    }
}
