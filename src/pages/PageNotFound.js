import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <div className="pnf">
        <div className="pnf-div card">
          <div className="pnf-p1">Page not found</div>
          <div>
            Looks like you’ve followed a broken link or entered a URL that
            doesn’t exist on this site.
          </div>
          <hr />
          <div>
            If this is your site, and you weren’t expecting a 404 for this path,
            please visit Netlify’s{" "}
            <Link to="https://answers.netlify.com/t/support-guide-i-ve-deployed-my-site-but-i-still-see-page-not-found/125?utm_source=404page&utm_campaign=community_tracking">
              “page not found” support guide 
            </Link>
             &nbsp;for troubleshooting tips.
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
