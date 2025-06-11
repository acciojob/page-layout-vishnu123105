
import React from "react";
import './../styles/App.css';
 
const PageLayout = ({ header, children, footer }) => {
  return (
    <div>
      <div>{header}</div>
      <main>{children}</main>
      <div>{footer}</div>
    </div>
  );
};

const App = () => {
  return (
    <PageLayout
      header ={<header><h1>Welcome to My Website</h1></header>}
      footer ={<footer><p>© 2023 My Website. All rights reserved.</p></footer>}
>
  <div>
      <p>This is the main content of my website.</p>
      </div>
    
    </PageLayout>
  )
}

export default App
