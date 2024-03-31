import './globals.css';
import Layout from "./layout";
import TradeOptions from "./components/TradeOptions";
import Footer from "./components/Footer";
import TradeForm from "./components/TradeForm";
import Tabs from "./components/Tabs";
import TradeDetails from './components/TradeDetails';

export default function Home() {
  return (
      <Layout>
        <div className="flex flex-col items-center justify-center">
        <Tabs />
        <TradeDetails />
        <div className="mt-8"> {/* Adjust margin top for spacing */}
          <TradeOptions />
        </div>
          <TradeForm />
          <Footer />
        </div>
      </Layout>
    );
}
