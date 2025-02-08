import PropTypes from "prop-types";
import { IconBathRoom, IconBedRoom } from "../Icons";

export default function AvaliableEstate({ estate }) {
  return (
    <div className="p-4 bg-white rounded-lg border border-gray-600/10">
      <img src={estate?.image} />
      <div className="p-6">
        <h4 className="text-2xl font-bold cursor-pointer">{estate.title}</h4>
        <div className="mt-2">
          <span className="text-xl font-extrabold text-blue-600">
            {estate?.price}
          </span>
          /M
        </div>
      </div>
      <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
        <div className="flex items-center">
          <IconBedRoom height={22} width={22} />
          <p>
            <span className="font-bold text-gray-900">{estate?.bedRooms}</span>{" "}
            Bedrooms
          </p>
        </div>
        <div className="flex items-center">
          <IconBathRoom height={22} width={22} />
          <p>
            <span className="font-bold text-gray-900">{estate?.bathRooms}</span>{" "}
            Bathrooms
          </p>
        </div>
      </div>
    </div>
  );
}

AvaliableEstate.propTypes = {
  estate: PropTypes.object.isRequired,
};
