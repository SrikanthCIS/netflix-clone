import React from "react";
import "../css/PlansPage.css";

function PlansPage() {
  return (
    <div className="planspage">
      <div className="planpage__plan">
        <div className="planpage__info">
          <h5>Premium</h5>
          <h6>4K + HDR</h6>
        </div>
        <button>Subcribe</button>
      </div>
      <div className="planpage__plan">
        <div className="planpage__info">
          <h5>Basic</h5>
          <h6>720p</h6>
        </div>
        <button>Subcribe</button>
      </div>
      <div className="planpage__plan">
        <div className="planpage__info">
          <h5>Standard</h5>
          <h6>1080p</h6>
        </div>
        <button>Subcribe</button>
      </div>
    </div>
  );
}

export default PlansPage;
