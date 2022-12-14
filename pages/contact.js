import Head from "next/head";
import ContactForm from "../components/ContactForm";


export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <ContactForm />
    </div>
  );
}
