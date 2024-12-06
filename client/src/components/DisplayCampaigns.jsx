import React from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from "uuid";
import FundCard from './FundCard';
import { loader } from '../assets';

const DisplayCampaigns = ({ title, isLoading }) => {
  const navigate = useNavigate();

  // Static sample campaigns
  const campaigns = [
    {
      title: 'Campaign 1',
      image: './img.jpg',
      target: '100 ETH',
      amountCollected: '30 ETH',
      owner: 'John Doe',
      description: 'This is a sample campaign description for Campaign 1.',
      pId: 1,
      deadline: new Date().toISOString(),
    },
    {
      title: 'Campaign 2',
      image: '//www.googlehttps:.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fsea-wallpaper&psig=AOvVaw3-V8nvSQAXmZb81VLytNNF&ust=1733548654349000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIDwl42zkooDFQAAAAAdAAAAABAE',
      target: '200 ETH',
      amountCollected: '50 ETH',
      owner: 'Jane Smith',
      description: 'This is a sample campaign description for Campaign 2.',
      pId: 2,
      deadline: new Date().toISOString(),
    },
    {
      title: 'Campaign 3',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fsea-wallpaper&psig=AOvVaw3-V8nvSQAXmZb81VLytNNF&ust=1733548654349000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIDwl42zkooDFQAAAAAdAAAAABAE',
      target: '300 ETH',
      amountCollected: '150 ETH',
      owner: 'Mark Johnson',
      description: 'This is a sample campaign description for Campaign 3.',
      pId: 3,
      deadline: new Date().toISOString(),
    },
    {
      title: 'Campaign 4',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fsea-wallpaper&psig=AOvVaw3-V8nvSQAXmZb81VLytNNF&ust=1733548654349000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIDwl42zkooDFQAAAAAdAAAAABAE',
      target: '500 ETH',
      amountCollected: '250 ETH',
      owner: 'Emily Davis',
      description: 'This is a sample campaign description for Campaign 4.',
      pId: 4,
      deadline: new Date().toISOString(),
    },
  ];

  const handleNavigate = (campaign) => {
    navigate(`/campaign-details/${campaign.title}`, { state: campaign });
  }
  
  return (
    <div>
      <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">{title} ({campaigns.length})</h1>

      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {isLoading && (
          <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
        )}

        {!isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            You have not created any campaigns yet
          </p>
        )}

        {!isLoading && campaigns.length > 0 && campaigns.map((campaign) => (
          <FundCard 
            key={uuidv4()}
            {...campaign}
            handleClick={() => handleNavigate(campaign)}
          />
        ))}
      </div>
    </div>
  )
}

export default DisplayCampaigns;
