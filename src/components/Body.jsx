import { Table } from "flowbite-react";


export default function Body(props) {
    const {
        country,
        weBuy,
        exchangeRate,
        weSell
    } = props;

    let countries = country.map((country, index) => {
        return country[index];
    })

    return (
        <Table.Body className="divide-y">
            <Table.Row className="bg-white hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white" children={countries} />
                <Table.Cell children={weBuy}/>
                <Table.Cell children={exchangeRate}/>
                <Table.Cell children={weSell}/>
            </Table.Row>
            <Table.Row className="bg-white hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Microsoft Surface Pro
                </Table.Cell>
                <Table.Cell children='test'>
                    
                </Table.Cell>
                <Table.Cell>
                    Laptop PC
                </Table.Cell>
                <Table.Cell>
                    $1999
                </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Magic Mouse 2
                </Table.Cell>
                <Table.Cell>
                    Black
                </Table.Cell>
                <Table.Cell>
                    Accessories
                </Table.Cell>
                <Table.Cell>
                    $99
                </Table.Cell>
            </Table.Row>
        </Table.Body>
    )
}