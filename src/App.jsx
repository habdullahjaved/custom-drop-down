import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { timeOptions } from "./utils/timeOptions";
import "./App.css";
import CustomDropDown from "./components/CustomDropDown";
import { Tab, Tabs } from "react-bootstrap";

function App() {
  const [openTime, setOpenTime] = useState(false);
  const [openTime1, setOpenTime1] = useState(false);

  const [time, setTime] = useState({
    pickup_time: "",
    dropoff_time: "",
  });

  const [tourTime, setTourTime] = useState({
    pickup_time: "",
    dropoff_time: "",
  });

  const [key, setKey] = useState("buses");

  const handleOpen = (type) => {
    if (type === "pickup_time") {
      setOpenTime(!openTime);
    } else {
      setOpenTime1(!openTime1);
    }
  };

  const handleOptionClick = (tabkey, type, option) => {
    if (tabkey === "buses" && type === "pickup_time") {
      setTime((prev) => ({ ...prev, pickup_time: option.value }));
      setOpenTime(false); // Close the dropdown after selection
    } else if (tabkey === "buses" && type === "dropoff_time") {
      setTime((prev) => ({ ...prev, dropoff_time: option.value }));
      setOpenTime1(false); // Close the dropdown after selection
    }

    if (tabkey === "tours" && type === "pickup_time") {
      setTourTime((prev) => ({ ...prev, pickup_time: option.value }));
      setOpenTime(false); // Close the dropdown after selection
    } else if (tabkey === "tours" && type === "dropoff_time") {
      setTourTime((prev) => ({ ...prev, dropoff_time: option.value }));
      setOpenTime1(false); // Close the dropdown after selection
    }
  };

  const closeDropdown = (type) => {
    if (type === "pickup_time") {
      setOpenTime(false);
    } else {
      setOpenTime1(false);
    }
  };

  console.log(time);

  return (
    <div className="container">
      <div className="row">
        <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
          <Tab eventKey="buses" title="Bus">
            <div className="row">
              <div className="col-md-4 mb-2 mt-2">
                <CustomDropDown
                  isOpen={openTime}
                  options={timeOptions}
                  toggleOpen={handleOpen}
                  handleOptionClick={handleOptionClick}
                  value={time.pickup_time}
                  type={"pickup_time"}
                  tabkey={"buses"}
                  closeDropdown={closeDropdown}
                />
              </div>
              <div className="col-md-4 mb-2 mt-2">
                <CustomDropDown
                  isOpen={openTime1}
                  options={timeOptions}
                  toggleOpen={handleOpen}
                  handleOptionClick={handleOptionClick}
                  value={time.dropoff_time}
                  type={"dropoff_time"}
                  tabkey={"buses"}
                  closeDropdown={closeDropdown}
                />
              </div>
            </div>
          </Tab>
          <Tab eventKey="tours" title="Tour">
            <div className="row">
              <div className="col-md-4 mb-2 mt-2">
                <CustomDropDown
                  isOpen={openTime}
                  options={timeOptions}
                  toggleOpen={handleOpen}
                  handleOptionClick={handleOptionClick}
                  value={tourTime.pickup_time}
                  type={"pickup_time"}
                  tabkey={"tours"}
                  closeDropdown={closeDropdown}
                />
              </div>
              <div className="col-md-4 mb-2 mt-2">
                <CustomDropDown
                  isOpen={openTime1}
                  options={timeOptions}
                  toggleOpen={handleOpen}
                  handleOptionClick={handleOptionClick}
                  value={tourTime.dropoff_time}
                  type={"dropoff_time"}
                  tabkey={"tours"}
                  closeDropdown={closeDropdown}
                />
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
