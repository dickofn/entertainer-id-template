$(".chips").chips();
$(".chips-placeholder").chips({
  placeholder: "Enter Categories",
  secondaryPlaceholder: "+Tag"
});
$(".chips-autocomplete").chips({
  autocompleteOptions: {
    data: {
      Jazz: null,
      Pop: null,
      Rock: null,
      Rap: null,
      Classic: null,
      Electro: null,
      Traditional: null,
    },
    minLength: 0
  }
});
