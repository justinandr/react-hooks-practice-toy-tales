import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDonate, onUpdateToy }) {
  return (
    <div id="toy-collection">
      {toys.map(toy => 
        <ToyCard 
          key={toy.id}
          toy={toy}
          onDonate={onDonate}
          onUpdateToy={onUpdateToy}
        />)}
    </div>
  );
}

export default ToyContainer;
