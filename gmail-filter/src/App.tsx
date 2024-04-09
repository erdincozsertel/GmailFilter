//TODO: test
import { ChangeEvent, useState } from "react";
import "./App.css";
import {
  Entry,
  Filter,
  Property,
  Section,
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
  function propertyMapper(property: Property, entryIndex: number) {
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
            const propertyIndex = filters.entries[
              entryIndex
            ].properties.findIndex((x) => x.name === property.name);
            handleEntry(event.target.value, entryIndex, propertyIndex);
          }}
          // checked={count === x.visable}
          //TODO:Ozel Durum Kontrol et
          // disabled={usermode !== x.visable}
        />
      </div>
    );
  }
  function createFilter(entry: Entry, entryIndex: number) {
    return (
      <div className="w-full grid grid-cols-1 divide-y">
        <h1 className="w-full text-gray-800 text-3xl font-bold mb-6">Filter</h1>
        <div className="flex flex-wrap -mx-3 mb-6">
          {entry.properties
            .filter(
              (property) =>
                property.section === Section.Filiter &&
                VisiblityHelper(usermode, property)
            )
            .map((property) => propertyMapper(property, entryIndex))}
        </div>
        <h1 className="w-full text-gray-800 text-3xl font-bold mb-6">Action</h1>
        <div className="flex flex-wrap -mx-3 mb-6">
          {propertyList
            .filter(
              (property) =>
                property.section === "Action" &&
                VisiblityHelper(usermode, property)
            )
            .map((property) => propertyMapper(property, entryIndex))}
        </div>
      </div>
    );
  }
  const [filters, setFilters] = useState<Filter>({
    title: "Filter 1",
    id: 1,
    entries: [{ title: "Entry 0", id: 0, properties: propertyList }],
  });

  function addEntry() {
    let max = Math.max(...filters.entries.map((entry) => entry.id)) + 2;
    setFilters({
      ...filters,
      entries: [
        ...filters.entries,
        { title: `Entry ${max}`, id: max, properties: propertyList },
      ],
    });
  }
  function removeEntry(id: number) {
    setFilters((prev) => ({
      ...prev,
      entries: prev.entries.filter((x) => x.id !== id),
    }));
  }
  function handleEntry2(newValue: any) {
    setFilters((prev) => ({
      ...prev,
      entries: prev.entries.map((entry) => ({
        ...entry,
        properties: entry.properties.map((property) => ({
          ...property,
          value: newValue,
        })),
      })),
    }));
  }

  function handleEntry(
    newValue: any,
    entryIndex: number,
    propertyIndex: number
  ) {
    let tempFilter = filters;
    tempFilter.entries[entryIndex].properties[propertyIndex].value = newValue;
    setFilters(tempFilter);
  }

  function saveFilters() {
    console.log(generateOutputXML(filters));
  }

  return (
    <div className="flex flex-col space-y-4 bg-gradient-to-t from-slate-300 to-gray-50">
      {/* Mode Selector */}
      <div className="relative mt-1">
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
          <option value="NormalMode">Normal Mode</option>
          <option value="ExpertMode">Expert Mode</option>
        </select>
      </div>
      {/* Filters*/}
      {filters.entries.map((entry, entryIndex) => (
        <div key={entry.id}>
          {createFilter(entry, entryIndex)}
          {filters.entries.length > 1 && (
            <button onClick={() => removeEntry(entry.id)}>Remove</button>
          )}
        </div>
      ))}
      {/* Add*/}
      <div className="flex justify-center">
        <button onClick={addEntry}>Add</button>
      </div>
      <div className="flex justify-center">
        <button onClick={saveFilters}>Save</button>
      </div>
    </div>
  );
}

export default App;
