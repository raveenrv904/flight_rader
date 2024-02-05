import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
const Header = () => {
  const store = useSelector((store) => store);
  //console.log(store.flights.length);
  return (
    <header>
      <div>
        <img src="/logo-f.png" alt="" />
        <h2>Flights Tracker</h2>
      </div>

      <h4>
        {store.isLoading
          ? "Calculating Flights...."
          : `${store.flights.length} Flights Found`}
      </h4>
    </header>
  );
};

export default Header;
