[Live Demo] (https://rawgit.com/StrutTower/Tower-Sortable-Table/1.0.2/demo/index.html)

## Instructions

- Add a `data-twr-sortable-table` attribute to the table element.
- Add a `data-twr-sorting-variable` attribute to the table element and provide the name of the variable you wish to use for sorting the table.
- On each column header you want to sort by add a `data-twr-table-sorter` attribute and provide the property name of the object that will be displayed in that column.
- Add a `data-twr-table-default` attribute on the column that you want to be sorted by default.
- On the ngRepeat add the orderBy filter and use the variable that you provided on the table element.
- Requires FontAwesome for the sorting icon next the the header names.
