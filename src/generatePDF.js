import jsPDF from "jspdf";
import "jspdf-autotable";

const generatePDF = (customers) => {
  const doc = new jsPDF();

  const tableColumn = ["firstName", "lastName", "email", "address", "zipcode"];

  const tableRows = [];

  customers.forEach((customer) => {
    const { firstName, lastName, email, address, zipcode } = customer;

    const customersData = [firstName, lastName, email, address, zipcode];

    tableRows.push(customersData);
  });

  doc.autoTable(tableColumn, tableRows, { startY: 20 });
  const date = Date().split(" ");

  const dateStr = `${date[0]}${date[1]}${date[2]}${date[3]}${date[4]}`;

  doc.text("List of customers.", 14, 15);

  doc.save(`report_${dateStr}.pdf`);
};

export default generatePDF;
