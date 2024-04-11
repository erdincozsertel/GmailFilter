//TODO: test
import { useState } from "react";
import "./App.css";
import {
  Entry,
  Filter,
  Property,
  UserMode,
  propertyList,
} from "./utils/properties";
import { generateOutputXML } from "./utils/filterXML";

function App() {
  const [usermode, setUserMode] = useState(UserMode.EasyMode);
  function UserModeChange(value: UserMode) {
    setUserMode(value);
  }
  function VisiblityHelper(usermode: UserMode, property: Property) {
    let visablity = property.visable;
    if (usermode == UserMode.EasyMode) {
      return property.visable == UserMode.EasyMode;
    } else if (usermode == UserMode.NormalMode) {
      return visablity == UserMode.EasyMode || visablity == UserMode.NormalMode;
    } else if (usermode == UserMode.ExpertMode) {
      return true;
    } else {
      return false;
    }
  }
  function propertyMapper(property: Property, entryId: number) {
    return (
      <div
        key={property.name}
        className={property.style["container"] + " mx-4"}
      >
        <label
          className={property.style["label"] + " text-left"}
          htmlFor={property.name}
        >
          {property.visableName}
        </label>
        <input
          className={property.style["input"]}
          type={property.type === "boolean" ? "checkbox" : "text"}
          id={property.name}
          name={property.name}
          onChange={(event) => {
            handleEntry(
              property.type === "boolean"
                ? event.target.checked
                : event.target.value,
              entryId,
              property
            );
          }}
          // checked={count === x.visable}
          //TODO:Ozel Durum Kontrol et
          // disabled={usermode !== x.visable}
        />
      </div>
    );
  }
  function entryMapper(entry: Entry) {
    return (
      <div className="w-full grid grid-cols-1 divide-y">
        <h1 className="w-full text-gray-800 text-3xl font-bold mb-6">Filter</h1>
        <div className="flex flex-wrap -mx-3 mb-6">
          {propertyList
            .filter(
              (property) =>
                property.section === "Filter" &&
                VisiblityHelper(usermode, property)
            )
            .map((property) => propertyMapper(property, entry.id))}
        </div>
        <h1 className="w-full text-gray-800 text-3xl font-bold mb-6">Action</h1>
        <div className="flex flex-wrap -mx-3 mb-6">
          {propertyList
            .filter(
              (property) =>
                property.section === "Action" &&
                VisiblityHelper(usermode, property)
            )
            .map((property) => propertyMapper(property, entry.id))}
        </div>
      </div>
    );
  }
  const [filters, setFilters] = useState<Filter>({
    title: "Filter 1",
    id: 0,
    entries: [{ title: "Entry 0", id: 0, properties: [] as Property[] }],
  });

  function addEntry() {
    let max = Math.max(...filters.entries.map((entry) => entry.id)) + 1;
    setFilters({
      ...filters,
      entries: [
        ...filters.entries,
        { title: `Entry ${max}`, id: max, properties: [] as Property[] },
      ],
    });
  }
  function removeEntry(id: number) {
    setFilters((prev) => ({
      ...prev,
      entries: prev.entries.filter((x) => x.id !== id),
    }));
  }

  function handleProperty(
    newValue: any,
    properties: Property[],
    property: Property,
    entryIndex: number
  ): Property[] {
    if (entryIndex >= 0) {
      properties[entryIndex].value = newValue;
    } else {
      properties.push({ ...property, value: newValue });
    }
    return properties;
  }

  function handleEntry2(newValue: any, entryId: number, property: Property) {
    const updatedEntries = [...filters.entries].map((entry) => {
      if (entry.id !== entryId) return entry;
      const entryIndex = entry.properties.findIndex(
        (prop) => prop.name === property.name
      );
      const updatedProperties = handleProperty(
        newValue,
        entry.properties,
        property,
        entryIndex
      );

      return {
        ...entry,
        properties: [...updatedProperties],
      };
    });

    setFilters((prev) => ({ ...prev, entries: updatedEntries }));
  }

  function handleEntry(newValue: any, entryId: number, property: Property) {
    const updatedEntries = [...filters.entries].map((entry) => {
      if (entry.id !== entryId) return entry;
      const entryIndex = entry.properties.findIndex(
        (prop) => prop.name === property.name
      );
      const updatedProperties = handleProperty(
        newValue,
        entry.properties,
        property,
        entryIndex
      );

      return {
        ...entry,
        properties: [...updatedProperties],
      };
    });

    setFilters((prev) => ({ ...prev, entries: updatedEntries }));
  }

  function saveFilters() {
    console.log(generateOutputXML(filters));
  }

  return (
    <div className="h-screen w-screen flex flex-col bg-gradient-to-t from-slate-300 to-gray-50">
      {/* Mode Selector */}
      <div className="my-5 flex justify-center w-full">
        <select
          onChange={(event) =>
            UserModeChange(
              UserMode[event.target.value as keyof typeof UserMode]
            )
          }
          className="appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          id="modeSelector"
          name="modeSelector"
        >
          <option value="EasyMode">Easy Mode</option>
          <option value="NormalMode" disabled>Normal Mode</option>
          <option value="ExpertMode" disabled>Expert Mode</option>
        </select>
      </div>
      <></>
      {/* Filters*/}
      <div className="overflow-y-auto scroll-m-2 my-5 space-y-4 border-solid border-t-4 border-b-4 border-gray-600/30 rounded-lg">
        <div className="mx-20">
          {filters.entries.map((entry, entryIndex) => (
            <div
              className="my-2 border-solid border-2 border-gray-600/45 rounded-lg"
              key={entry.id}
            >
              {entryMapper(entry)}
              {filters.entries.length > 1 && (
                <button className="m-5" onClick={() => removeEntry(entry.id)}>
                  Remove
                </button>
              )}
            </div>
          ))}
          {/* Add*/}
          <div className="flex justify-center">
            <button onClick={addEntry}>Add</button>
          </div>
        </div>
      </div>
      <div className="flex-grow"></div>
      {/* Save*/}
      <div className="fixed-bottom my-5 flex justify-center w-full">
        <button onClick={saveFilters}>Save</button>
      </div>
    </div>
  );
}

export default App;
