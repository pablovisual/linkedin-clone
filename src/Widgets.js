import React from 'react';
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import "./Widgets.css";

function Widgets() {
    const newsArticle = (heading, subtitle) => (
      <div className="widgets__article">
        <div className="widgets__articleLeft">
            <FiberManualRecordIcon />
        </div>

        <div className="widgets__articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );

    return (
        <div className="widgets">
          <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
          </div>

          {newsArticle("I just made nice Linkedin","Top news - 9999 readers")}
          {newsArticle("Coronavirus: US updates","Top news - 886 readers")}
          {newsArticle("Tesla hits new highs","Cars & auto - 300 readers")}
          {newsArticle("Bitcoin Breaks $22k","Crypto - 8000 readers")}
          {newsArticle("Is Redux too good?","Code - 123 readers")}
          {newsArticle("I get hired as a SWE or SW developer!","Top news - 6503 readers")}
        </div>
    )
}

export default Widgets
