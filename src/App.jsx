import TourList from "./assets/TourList";
import React, { useState } from "react";
import "./App.css";

const toursData = [
  {
    id: 1,
    imagelink:
      "https://hblimg.mmtcdn.com//content/hubble/img/narkanda/mmt/destination/m_Narkanda_l_372_902.jpg?im=Resize=(400,462)",
    nameofthetour: "Shimla Tour ",
    tourDescription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas culpa possimus laboriosam corporis odit vel eos maiores sapiente quod non! Nam neque veritatis enim, voluptatibus incidunt placeat vero excepturi molestiae",
  },
  {
    id: 2,
    imagelink:
      "https://hblimg.mmtcdn.com//content/hubble/img/dooars/mmt/destination/m_Dooars_l_457_685.jpg?im=Resize=(400,462)",
    nameofthetour: "Kashimir ",
    tourDescription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas culpa possimus laboriosam corporis odit vel eos maiores sapiente quod non! Nam neque veritatis enim, voluptatibus incidunt placeat vero excepturi molestiae",
  },
  {
    id: 3,
    imagelink:
      "https://hblimg.mmtcdn.com/content/hubble/img/collections/m_weekend44_p_540_417.jpg?im=Resize=(400,462)",
    nameofthetour: "Goa",
    tourDescription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas culpa possimus laboriosam corporis odit vel eos maiores sapiente quod non! Nam neque veritatis enim, voluptatibus incidunt placeat vero excepturi molestiae",
  },
  {
    id: 4,
    imagelink:
      "https://hblimg.mmtcdn.com/content/hubble/img/collections/m_beach44_p_540_417.jpg?im=Resize=(400,462)",
    nameofthetour: "Kerala",
    tourDescription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas culpa possimus laboriosam corporis odit vel eos maiores sapiente quod non! Nam neque veritatis enim, voluptatibus incidunt placeat vero excepturi molestiae",
  },
];

function App() {
  const [ownTourData, SetOwnTourData] = useState(toursData);

  function removeTour(currentid) {
    const filteredTourData = ownTourData.filter(
      (tour) => tour.id !== currentid
    );
    SetOwnTourData(filteredTourData);
  }

  return (
    <div className="tourscss">
      {ownTourData.map((tours) => {
        return <TourList tours={tours} removeTour={removeTour} />;
      })}
    </div>
  );
}

export default App;
