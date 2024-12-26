import React from "react";
import { Tabs } from "../component/ui/tabs"; // Adjust the import based on your folder structure

export function ViewMore() {
  const tabs = [
    {
      title: "Bitcoin",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-auto rounded-2xl p-5 md:p-10 text-lg md:text-2xl font-bold text-white bg-[#7D7ED6]">
          <p>Bitcoin</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Ethereum",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-auto rounded-2xl p-5 md:p-10 text-lg md:text-2xl font-bold text-white bg-[#7D7ED6]">
          <p>Ethereum</p>
          <DummyContent2 />
        </div>
      ),
    },
    {
      title: "Tether",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-auto rounded-2xl p-5 md:p-10 text-lg md:text-2xl font-bold text-white bg-[#7D7ED6]">
          <p>Tether</p>
          <DummyContent3 />
        </div>
      ),
    },
    {
      title: "Solana",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-auto rounded-2xl p-5 md:p-10 text-lg md:text-2xl font-bold text-white bg-[#7D7ED6]">
          <p>Solana</p>
          <DummyContent4 />
        </div>
      ),
    },
    {
      title: "Dogecoin",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-auto rounded-2xl p-5 md:p-10 text-lg md:text-2xl font-bold text-white bg-[#7D7ED6]">
          <p>Dogecoin</p>
          <DummyContent5 />
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col items-start justify-start px-4 lg:mx-60 mb-96 mt-36">
      <Tabs tabs={tabs} />
      <div className="mb-40 lg:mb-60" /> {/* Spacer to prevent overlap with footer */}
    </div>
  );
}

const DummyContent = () => {
  return (
    <div className="w-full lg:w-11/12 bg-[#908CCE] text-black text-sm md:text-lg lg:rounded-lg mt-5 p-5 md:p-10 text-justify font-light">
      <h1 className="text-center text-lg md:text-2xl font-normal mb-2">Bitcoin</h1>
      <p>
        Bitcoin is a decentralized digital currency that operates without a central authority, such as a government or bank. It was created in 2009 by an anonymous person or group known as Satoshi Nakamoto. Bitcoin transactions are verified through blockchain technology, a distributed ledger that ensures transparency and security. It allows peer-to-peer transactions across the globe, and its supply is capped at 21 million coins, making it a deflationary asset.
      </p>
    </div>
  );
};

const DummyContent2 = () => {
  return (
    <div className="w-full lg:w-11/12 bg-[#908CCE] text-black text-sm md:text-lg lg:rounded-lg mt-5 p-5 md:p-10 text-justify font-light">
      <h1 className="text-center text-lg md:text-2xl font-normal mb-2">Ethereum</h1>
      <p>
        Ethereum is a decentralized, open-source blockchain platform that enables developers to build and deploy smart contracts and decentralized applications (dApps). Created by Vitalik Buterin in 2015, Ethereum goes beyond being a cryptocurrency like Bitcoin by allowing programmable transactions through its native cryptocurrency, Ether (ETH). Its blockchain is powered by a global network of nodes that validate and secure transactions.
      </p>
    </div>
  );
};

const DummyContent3 = () => {
  return (
    <div className="w-full lg:w-11/12 bg-[#908CCE] text-black text-sm md:text-lg lg:rounded-lg mt-5 p-5 md:p-10 text-justify font-light">
      <h1 className="text-center text-lg md:text-2xl font-normal mb-2">Tether</h1>
      <p>
        Tether (USDT) is a type of cryptocurrency known as a stablecoin, which is pegged to the value of a fiat currency, typically the U.S. dollar. This means 1 USDT is generally equivalent to 1 USD, providing stability compared to more volatile cryptocurrencies like Bitcoin. Tether is used to facilitate transactions in the crypto market, offering a reliable store of value and a medium for trading between different cryptocurrencies. It is commonly used for transferring funds.
      </p>
    </div>
  );
};

const DummyContent4 = () => {
  return (
    <div className="w-full lg:w-11/12 bg-[#908CCE] text-black text-sm md:text-lg lg:rounded-lg mt-5 p-5 md:p-10 text-justify font-light">
      <h1 className="text-center text-lg md:text-2xl font-normal mb-2">Solana</h1>
      <p>
        Solana is a high-performance blockchain platform designed for decentralized applications (dApps) and cryptocurrencies. Known for its fast transaction speeds and low fees, Solana uses a unique consensus mechanism called Proof of History (PoH), combined with Proof of Stake (PoS), to achieve scalability. This allows Solana to process thousands of transactions per second, making it one of the fastest blockchains. It supports a wide range of applications.
      </p>
    </div>
  );
};

const DummyContent5 = () => {
  return (
    <div className="w-full lg:w-11/12 bg-[#908CCE] text-black text-sm md:text-lg lg:rounded-lg mt-5 p-5 md:p-10 text-justify font-light">
      <h1 className="text-center text-lg md:text-2xl font-normal mb-2">Dogecoin</h1>
      <p>
        Dogecoin is a cryptocurrency that was created in 2013 as a joke based on the popular "Doge" meme featuring a Shiba Inu dog. Despite its humorous origins, Dogecoin gained a strong following and has been used for tipping online, charitable donations, and as a low-cost transaction method. It operates on a decentralized blockchain similar to Bitcoin, but with a larger supply and faster transaction times. Dogecoin's community-driven nature has contributed to its popularity.
      </p>
    </div>
  );
};

export default ViewMore;
