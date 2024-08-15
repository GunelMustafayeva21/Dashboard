import React from "react";
import { IProps } from "./model";


const RenderIf: React.FC<IProps>= ({ condition, children, renderElse=""}) => {
  if(condition) return <React.Fragment>{children}</React.Fragment>
  return <React.Fragment>{renderElse}</React.Fragment>
}

export default RenderIf

