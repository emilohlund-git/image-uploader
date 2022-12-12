import Head from "next/head";
import Footer from "../components/Footer";
import ImageUploader from "../modules/ImageUploader";

export default function Home() {
  return (
    <>
      <Head>
        <title>Image Uploader - emilohlund-git</title>
      </Head>
      <div
        style={{
          backgroundColor: "#FAFAFB",
        }}
        className="flex flex-col items-center justify-center h-screen"
      >
        <ImageUploader />
        <Footer />
      </div>
    </>
  );
}
