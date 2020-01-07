// you can have multiple page components for different layouts

import Header from "./Header";
import Meta from "./Meta";

export default props => {
  return (
    <div>
      <Meta />
      <Header />
      {props.children}
    </div>
  );
};
