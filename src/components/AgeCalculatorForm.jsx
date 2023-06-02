import React, { useState } from "react";
import PropTypes from "prop-types";

const AgeCalculatorForm = ({ calculateAge }) => {
  const [birthDate, setBirthDate] = useState("");
  console.log(birthDate);

  const handleChangeDate = (e) => {
    setBirthDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateAge(birthDate);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 "
    >
      <input
        value={birthDate}
        type="date"
        onChange={handleChangeDate}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer"
      />

      <button
        disabled={!birthDate}
        type="submit"
        className="disabled:bg-slate-400 disabled:cursor-not-allowed inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
      >
        Calculate Age
      </button>
    </form>
  );
};

AgeCalculatorForm.propTypes = {
  calculateAge: PropTypes.func.isRequired,
};
export default AgeCalculatorForm;
