import { Table } from 'flowbite-react'

export default function Head() {
    return (
        <Table.Head className='bg-orange-600 text-base text-white font-extrabold'>
            <Table.HeadCell children='Currency'/>
            <Table.HeadCell children='We Buy' />
            <Table.HeadCell children='Exchange Rate' />
            <Table.HeadCell children='We Sell' />
        </Table.Head>
    )
}