import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";

export default function Dropdown() {
  const [category, setCategory] = React.useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleProceed = () => {
    const categoryToPath = {
      Matrimonial: "/matrimonial",
      "Property for sale": "/property-for-sale",
      "Property to Rent": "/property-to-rent",
      "Lost Found": "/lost-found",
      Vehicles: "/vehicles",
      Astrology: "/astrology",
      Business: "/business",
      Computer: "/computer",
      Classified: "/classified",
      Education: "/education",
      Obituary: "/obituary"
    };

    const path = categoryToPath[category];
    if (path) {
      navigate(path);
    }
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 300 }}>
        <Select
          value={category}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">Select Category</MenuItem>
          <MenuItem value="Matrimonial">Matrimonial</MenuItem>
          <MenuItem value="Property for sale">Property for sale</MenuItem>
          <MenuItem value="Property to Rent">Property to Rent</MenuItem>
          <MenuItem value="Lost Found">Lost Found</MenuItem>
          <MenuItem value="Vehicles">Vehicles</MenuItem>
          <MenuItem value="Astrology">Astrology</MenuItem>
          <MenuItem value="Business">Business</MenuItem>
          <MenuItem value="Computer">Computer</MenuItem>
          <MenuItem value="Classified">Classified</MenuItem>
          <MenuItem value="Education">Education</MenuItem>
          <MenuItem value="Obituary">Obituary</MenuItem>
        </Select>
      </FormControl>
      <button
        className="p-3 bg-blue-700 ml-32 text-white font-bold rounded-xl "
        onClick={handleProceed}
      >
        Proceed
      </button>
    </div>
  );
}
