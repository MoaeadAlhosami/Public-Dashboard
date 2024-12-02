export const columns = [
    { field: "id", headerName: "ID", width: 33 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
        field: "name",
        headerName: "Name",
        flex: 1,
        cellClassName: "name-column--cell",
    },
    {
        field: "age",
        headerName: "Age",
        type: "number",
        headerAlign: "left",
        align: "left",
        flex: 1
    },
    {
        field: "phone",
        headerName: "Phone Number",
        flex: 1,
    },
    {
        field: "email",
        headerName: "Email",
        flex: 1,
    },
    {
        field: "address",
        headerName: "Address",
        flex: 1,
    },
    {
        field: "city",
        headerName: "City",
        flex: 1,
    },
    {
        field: "zipCode",
        headerName: "Zip Code",
        flex: 1,
    },
];

export const rows = [
    { id: 1, registrarId: 12345, name: "Alice Johnson", age: 28, phone: "(123)456-7890", email: "alicej@gmail.com", address: "123 Apple St", city: "New York", zipCode: "10001" },
    { id: 2, registrarId: 67890, name: "Bob Smith", age: 35, phone: "(234)567-8901", email: "bobsmith@gmail.com", address: "456 Orange Ave", city: "Los Angeles", zipCode: "90001" },
    { id: 3, registrarId: 11223, name: "Charlie Brown", age: 42, phone: "(345)678-9012", email: "charlieb@gmail.com", address: "789 Banana Blvd", city: "Chicago", zipCode: "60601" },
    { id: 4, registrarId: 44556, name: "Diana Prince", age: 31, phone: "(456)789-0123", email: "dianap@gmail.com", address: "101 Grape Rd", city: "Houston", zipCode: "77001" },
    { id: 5, registrarId: 77889, name: "Ethan Hunt", age: 38, phone: "(567)890-1234", email: "ethanh@gmail.com", address: "202 Cherry Ln", city: "Phoenix", zipCode: "85001" },
    { id: 6, registrarId: 99001, name: "Fiona White", age: 29, phone: "(678)901-2345", email: "fionaw@gmail.com", address: "303 Pine St", city: "Philadelphia", zipCode: "19101" },
    { id: 7, registrarId: 22334, name: "George Black", age: 40, phone: "(789)012-3456", email: "georgeb@gmail.com", address: "404 Maple Dr", city: "San Antonio", zipCode: "78201" },
    { id: 8, registrarId: 55667, name: "Hannah Lee", age: 26, phone: "(890)123-4567", email: "hannahl@gmail.com", address: "505 Oak St", city: "San Diego", zipCode: "92101" },
    { id: 9, registrarId: 88900, name: "Ian Taylor", age: 45, phone: "(901)234-5678", email: "iant@gmail.com", address: "606 Birch Ln", city: "Dallas", zipCode: "75201" },
    { id: 10, registrarId: 11234, name: "Julia Green", age: 33, phone: "(012)345-6789", email: "juliag@gmail.com", address: "707 Cedar Ave", city: "San Jose", zipCode: "95101" },
];
