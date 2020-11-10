export const formatCurrency = (int, prefix) => {
  let number_string = int.toString(),
    split = number_string.split("."),
    temp = split[0].length % 3,
    rupiah = split[0].substr(0, temp),
    thousand = split[0].substr(temp).match(/\d{3}/gi);

  if (thousand) {
    let separator = temp ? "." : "";
    rupiah += separator + thousand.join(".");
  }

  rupiah = split[1] !== undefined ? rupiah + "." + split[1] : rupiah;
  return prefix === undefined ? rupiah : rupiah ? "Rp. " + rupiah : "";
};
