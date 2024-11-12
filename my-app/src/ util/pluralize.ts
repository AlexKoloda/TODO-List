 export const pluralize = (num: number, [one, some, many]: string[]) => {
  const pluralRules = new Intl.PluralRules("ru-RU");
  const pluralForm = pluralRules.select(num);

  switch (pluralForm) {
    case "one":
      return one;
    case "few":
      return some;
    default:
      return many;
  }
};
