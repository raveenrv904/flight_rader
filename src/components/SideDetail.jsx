import axios from "axios";
import React, { useEffect, useState } from "react";
import { detailOptions } from "./../helpers/contants/";
const SideDetail = ({ detailId, setShowDetail }) => {
  //console.log('detay sayfası',detailId)

  const [detailInfo, setDetailInfo] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://flight-radar1.p.rapidapi.com/flights/detail?flight=${detailId}`,
        detailOptions
      )
      .then((res) => setDetailInfo(res.data))
      .catch((error) => console.log(error));
  }, [detailId]);

  console.log(detailInfo);

  return (
    <div className="detail-outer">
      <div className="detail-inner">
        <div className="detail-inner-close">
          <p className="close">
            <span onClick={() => setShowDetail(false)}>X</span>
          </p>
        </div>

        {!detailInfo ? (
          <p>Loading...</p>
        ) : (
          <>
            <h2>{detailInfo.aircraft.model.text}</h2>
            <h2>{detailInfo.aircraft.model.code}</h2>
            <p>Registration No: {detailInfo.aircraft.registration}</p>
            <img src={detailInfo.aircraft.images.large[0].src} alt="" />
            <p>Airline: {detailInfo.airline.name}</p>

            <p>
              <span>Origin: </span>
              <a
                href={detailInfo.airport.origin.website}
                target="_blank"
                rel="noreferrer"
              >
                {detailInfo.airport.origin.name}
              </a>
            </p>

            <p>
              <span>Destination: </span>
              <a
                href={detailInfo.airport.destination.website}
                target="_blank"
                rel="noreferrer"
              >
                {detailInfo.airport.destination.name}
              </a>
            </p>

            <p>
              <span>Status: </span>
              <span className="status">{detailInfo.status.text}</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default SideDetail;
