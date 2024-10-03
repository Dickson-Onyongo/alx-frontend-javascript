function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {
    [`income-${getCurrentYear(2021)}`]: income,
    [`gdp-${getCurrentYear(2021)}`]: gdp,
    [`capita-${getCurrentYear(2021)}`]: capita,
  };

  return budget;
}
