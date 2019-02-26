import React from "react";
import Link from "../Link";
import { VisibilityFilters } from "../../data/setVisibility";

const Footer = () => (
  <div className="link-control">
    <span>Show: </span>
    <Link filter={VisibilityFilters.SHOW_ALL}>全部</Link>
    <Link filter={VisibilityFilters.SHOW_IMCOMPLETED}>未完成</Link>
    <Link filter={VisibilityFilters.SHOW_WRONG}>答錯</Link>
    <Link filter={VisibilityFilters.SHOW_MARKED}>Marked</Link>
  </div>
);

export default Footer;
