import React, { useState, useMemo } from "react";

const TreeView = ({ locations, assets, searchQuery, filter, onSensorClick }) => {
  const [expandedNodes, setExpandedNodes] = useState(new Set());

  const buildTree = useMemo(() => {
    const nodeMap = new Map();

    locations.forEach((loc) =>
      nodeMap.set(loc.id, {
        id: loc.id,
        name: loc.name,
        type: "location",
        children: [],
      })
    );

    assets.forEach((asset) =>
      nodeMap.set(asset.id, {
        id: asset.id,
        name: asset.name,
        type: asset.sensorType ? "component" : "asset",
        sensorType: asset.sensorType,
        status: asset.status,
        gatewayId : asset.gatewayId ? asset.gatewayId : null,
        sensorId : asset.sensorId ? asset.sensorId : null,
        children: [],
      })
    );

    const tree = [];

    locations.forEach((loc) => {
      if (loc.parentId && nodeMap.has(loc.parentId)) {
        nodeMap.get(loc.parentId).children.push(nodeMap.get(loc.id));
      } else {
        tree.push(nodeMap.get(loc.id));
      }
    });

    assets.forEach((asset) => {
      const parentKey = asset.parentId || asset.locationId;
      if (parentKey && nodeMap.has(parentKey)) {
        nodeMap.get(parentKey).children.push(nodeMap.get(asset.id));
      } else {
        tree.push(nodeMap.get(asset.id));
      }
    });

    return tree;
  }, [locations, assets]);

  const filterTree = (nodes, query, filter) => {
    return nodes
      .map((node) => {
        const children = filterTree(node.children, query, filter);
        const matchesSearch = node.name
          .toLowerCase()
          .includes(query.toLowerCase());

        let matchesFilter = true;
        if (filter === "operating") {
          matchesFilter = node.status === "operating";
        } else if (filter === "alert") {
          matchesFilter = node.status !== "operating";
        }

        if (matchesSearch && matchesFilter) {
          return { ...node, children };
        } else if (children.length > 0) {
          return { ...node, children };
        }
        return null;
      })
      .filter(Boolean);
  };

  const filteredTree = useMemo(
    () => filterTree(buildTree, searchQuery, filter),
    [buildTree, searchQuery, filter]
  );

  const toggleExpand = (node) => {
    const id = node.id;
    if (node.type !== "location" && node.type !== "asset") {
      onSensorClick(node);
    } else {
      setExpandedNodes((prev) => {
        const newSet = new Set(prev);
        newSet.has(id) ? newSet.delete(id) : newSet.add(id);
        return newSet;
      });
    }
  };

  const renderTree = (nodes) => (
    <ul className="ml-6">
      {nodes.map((node) => (
        <li key={node.id} className="mb-1">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => toggleExpand(node)}
          >
            {node.children.length > 0 ? (
              <span className="mr-2 text-black">
                {expandedNodes.has(node.id) ? "⮟" : "⮞"}
              </span>
            ) : (
              <span className="mr-3">&nbsp;&nbsp;</span>
            )}
            <img
              src={
                node.type === "location"
                  ? "./icons/location.png"
                  : node.type === "asset"
                  ? "./icons/asset.png"
                  : "./icons/component.png"
              }
              alt={node.type}
              className="w-4 h-4 mr-1"
            />
            <span className="text-black">{node.name}</span>
            {node.type !== "location" &&
              node.type !== "asset" &&
              node.status && (
                <img
                  className="ml-2"
                  src={
                    node.status === "operating"
                      ? "./icons/bolt.png"
                      : "./icons/alert.png"
                  }
                  alt={node.status}
                />
              )}
          </div>
          {expandedNodes.has(node.id) && node.children.length > 0 && (
            <div>{renderTree(node.children)}</div>
          )}
        </li>
      ))}
    </ul>
  );

  return <div className="p-4 rounded-md">{renderTree(filteredTree)}</div>;
};

export default TreeView;
