import React from 'react';
import "../styles/PageTemplate.css"

const PageTemplate = ({children}) => {
    return(
      <div className = "page-template">
          <h1> To-Do</h1>
          <div className = "content">
              {children}
          </div>
      </div>
    )
  }

  export default PageTemplate;