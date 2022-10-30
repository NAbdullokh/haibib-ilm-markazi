import React from "react";
import { Container } from "./style";
import "./index.css";

const GoogleMap = () => {
  return (
    <Container>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            className="gmap_iframe"
            width="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=2048&amp;height=400&amp;hl=en&amp;q=Habib ilm markazi&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
          <a href="https://piratebay-proxys.com/">Pirate bay</a>
        </div>
        <style></style>
      </div>
    </Container>
  );
};

export default GoogleMap;
