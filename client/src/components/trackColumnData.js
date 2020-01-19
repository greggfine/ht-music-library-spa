export default [
  {
    dataField: "filename",
    text: "Track Name",
    sort: true,
    style: { color: "rgb(179, 34, 48)", fontWeight: "700" },
    headerStyle: { backgroundColor: "lightgrey" }
  },
  {
    dataField: "metadata.description",
    text: "Description",
    headerStyle: { backgroundColor: "lightgrey" }
  },
  {
    dataField: "metadata.bpm",
    text: "BPM",
    sort: true,
    headerStyle: { backgroundColor: "lightgrey" }
  },
  {
    dataField: "metadata.length",
    text: "Length",
    sort: true,
    headerStyle: { backgroundColor: "lightgrey" }
  }
];
