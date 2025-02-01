import React, { useState } from "react";

const TreeView = ({ data }) => {
  const [expandedNodes, setExpandedNodes] = useState({});

  const toggleNode = (nodeId) => {
    setExpandedNodes((prev) => ({
      ...prev,
      [nodeId]: !prev[nodeId],
    }));
  };

  const renderTree = (nodes) => {
    return nodes.map((node) => (
      <div key={node.id} style={{ marginLeft: node.level * 20 }}>
        <div onClick={() => toggleNode(node.id)}>
          {node.children && (expandedNodes[node.id] ? "-" : "+")} {node.name}
        </div>
        {node.children && expandedNodes[node.id] && (
          <div>{renderTree(node.children)}</div>
        )}
      </div>
    ));
  };

  return <div>{renderTree(data)}</div>;
};

export default TreeView;
