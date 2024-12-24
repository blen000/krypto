import React from "react";
import { Tabs } from "../component/ui/tabs"; // Adjust the import based on your folder structure
import Btc3 from "../assets/Btc3.jpg"

export function ViewMore() {
  const tabs = [
    {
      title: "Bitcoin",
      value: "product",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#7D7ED6]">
          <p>Bitcoin Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Ethereum",
      value: "services",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#7D7ED6]">
          <p>Ethereum Tab</p>
          <DummyContent2 />
        </div>
      ),
    },
    {
      title: "Tether",
      value: "playground",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#7D7ED6]">
          <p>Tether Tab</p>
          <DummyContent3 />
        </div>
      ),
    },
    {
      title: "Solana",
      value: "content",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#7D7ED6]">
          <p>Solana Tab</p>
          <DummyContent4 />
        </div>
      ),
    },
    {
      title: "Dogecoin",
      value: "random",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#7D7ED6] ">
          <p>Dogecoin Tab</p>
          <DummyContent5 />
        </div>
      ),
    },
  ];

  return (
    <div
      className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
    return (
        <div className="w-11/12 lg:h-3/4 absolute bg-[#908CCE] text-black text-sm lg:rounded-lg lg:text-xl mt-5 p-5 lg:p-20  text-justify font-light">
        <h1 className="text-center text-xl mb-2 lg:text-3xl font-normal">Bitcoin</h1>
        <p>Bitcoin is a decentralized digital currency that operates without a central authority, such as a government or bank. It was created in 2009 by an anonymous person or group known as Satoshi Nakamoto. Bitcoin transactions are verified through blockchain technology, a distributed ledger that ensures transparency and security. It allows peer-to-peer transactions across the globe, and its supply is capped at 21 million coins, making it a deflationary asset.</p>
        </div>
      );
    };
const DummyContent2 = () => {
  return (
    <div className="w-11/12 lg:h-3/4 absolute bg-[#908CCE] text-black text-sm lg:rounded-lg lg:text-xl mt-5 p-5 lg:p-20  text-justify font-light">
        <h1 className="text-center text-xl mb-2 lg:text-3xl font-normal">Ethereum</h1>
        <p>Ethereum is a decentralized, open-source blockchain platform that enables developers to build and deploy smart contracts and decentralized applications (dApps). Created by Vitalik Buterin in 2015, Ethereum goes beyond being a cryptocurrency like Bitcoin by allowing programmable transactions through its native cryptocurrency, Ether (ETH). Its blockchain is powered by a global network of nodes that validate and secure transactions. </p>
    </div>
  );
};
const DummyContent3 = () => {
    return (
      <div className="w-11/12 lg:h-3/4 absolute bg-[#908CCE] text-black text-sm lg:rounded-lg lg:text-xl mt-5 p-5 lg:p-20  text-justify font-light">
          <h1 className="text-center text-xl mb-2 lg:text-3xl font-normal">Tether</h1>
          <p>Tether (USDT) is a type of cryptocurrency known as a stablecoin, which is pegged to the value of a fiat currency, typically the U.S. dollar. This means 1 USDT is generally equivalent to 1 USD, providing stability compared to more volatile cryptocurrencies like Bitcoin. Tether is used to facilitate transactions in the crypto market, offering a reliable store of value and a medium for trading between different cryptocurrencies. It is commonly used for transferring funds.</p>
      </div>
    );
  };
  const DummyContent4 = () => {
    return (
      <div className="w-11/12 lg:h-3/4 absolute bg-[#908CCE] text-black text-sm lg:rounded-lg lg:text-xl mt-5 p-5 lg:p-20  text-justify font-light">
          <h1 className="text-center text-xl mb-2 lg:text-3xl font-normal">Solana</h1>
          <p>Solana is a high-performance blockchain platform designed for decentralized applications (dApps) and cryptocurrencies. Known for its fast transaction speeds and low fees, Solana uses a unique consensus mechanism called Proof of History (PoH), combined with Proof of Stake (PoS), to achieve scalability. This allows Solana to process thousands of transactions per second, making it one of the fastest blockchains. It supports a wide range of applications.</p>
      </div>
    );
  };
  const DummyContent5 = () => {
    return (
      <div className="w-11/12 lg:h-3/4 absolute bg-[#908CCE] text-black text-sm lg:rounded-lg lg:text-xl mt-5 p-5 lg:p-20  text-justify font-light">
          <h1 className="text-center text-xl mb-2 lg:text-3xl font-normal">Dogecoin</h1>
          <p>Dogecoin is a cryptocurrency that was created in 2013 as a joke based on the popular "Doge" meme featuring a Shiba Inu dog. Despite its humorous origins, Dogecoin gained a strong following and has been used for tipping online, charitable donations, and as a low-cost transaction method. It operates on a decentralized blockchain similar to Bitcoin, but with a larger supply and faster transaction times. Dogecoin's community-driven nature.</p>
      </div>
    );
  };

export default ViewMore;
