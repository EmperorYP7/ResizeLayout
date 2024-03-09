import React, { useState } from 'react';
import { Resizable } from 'react-resizable';
import axios from 'axios';

const ResizableLayout = () => {
  const [count, setCount] = useState({ add: 0, update: 0 });

  const addData = () => {
    axios.post('/api/data/add')
      .then(() => setCount(prevCount => ({ ...prevCount, add: prevCount.add + 1 })))
      .catch(error => console.error('Error adding data:', error));
  };

  const updateData = () => {
    axios.put('/api/data/update')
      .then(() => setCount(prevCount => ({ ...prevCount, update: prevCount.update + 1 })))
      .catch(error => console.error('Error updating data:', error));
  };

  return (
    <div className="resizable-layout">
      <Resizable
        className="resizable-component"
        defaultSize={{ width: 200, height: 200 }}
        minWidth={100}
        minHeight={100}
      >
        <div>
          <h2>Resizable Component 1</h2>
          <button onClick={addData}>Add</button>
          <button onClick={updateData}>Update</button>
        </div>
      </Resizable>
      <div className="non-resizable-component">
        <h2>Component 2</h2>
      </div>
      <Resizable
        className="resizable-component"
        defaultSize={{ width: 200, height: 200 }}
        minWidth={100}
        minHeight={100}
      >
        <div>
          <h2>Resizable Component 3</h2>
          <button onClick={addData}>Add</button>
          <button onClick={updateData}>Update</button>
        </div>
      </Resizable>
    </div>
  );
};

export default ResizableLayout;