// components/ExampleComponent.tsx
import axios from 'axios';
import React, { useState } from 'react';

interface ExampleComponentProps {
}

const ExampleComponent: React.FC<ExampleComponentProps> = () => {
  const [summonerName, setSummonerName] = useState("")
  const [dataSummoner, setDataSummoner] = useState(null)
  const API_KEY = "RGAPI-f982f732-9032-4be7-893e-11663d863977"

  const searchSumoner = () => {
    
    const apiCall = "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+summonerName+"?api_key="+ API_KEY;

    axios({
      method: 'get',
      url: apiCall,
    })
      .then(function (response) {
        console.log("data: ",response.data);  
        setDataSummoner(response.data) 
      });
    
  }

  return (
    <div>
      <input type="text" placeholder='summoner name' onChange={e => setSummonerName(e.target.value)} />
      <button onClick={searchSumoner}>Search summoner</button>
      {dataSummoner !== null &&(
        <>
        
          <h1>{dataSummoner.name}</h1>
          <img src={`https://ddragon.leagueoflegends.com/cdn/13.24.1/img/profileicon/${dataSummoner.profileIconId}.png`} />
        
        </>
      )}
    </div>
  );
};

export default ExampleComponent;
