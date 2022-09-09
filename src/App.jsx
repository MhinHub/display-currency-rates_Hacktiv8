import React, { useState, useEffect } from "react";
import { Card, Footer, Table } from "flowbite-react";
import Head from "./components/Head";

let country_list = ["IDR", "CAD", "JPY", "CHF", "EUR", "GBP"]
let BASE_URL = "https://api.currencyfreaks.com/latest?apikey=410c97d2f6b34af8bacd492c14a404ba"

export default function App() {
  const [currency, setCurrency] = useState(country_list);
  const [weBuy, setWeBuy] = useState([]);
  const [exchangeRate, setExchangeRate] = useState([]);
  const [weSell, setWeSell] = useState([]);


  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then((data) => {

        // console.log('IDR', data.rates['IDR'])

        function getExchangeRate(country) {
          for (let i in data.rates) {
            if (i.includes(country)) {
              return parseFloat(data.rates[i]).toFixed(2)
            }
          }
        }

        setExchangeRate(country_list.map((country) => getExchangeRate(country)))
      })
      .catch(console.log)
  }, [])

  console.log("rate", exchangeRate)

  useEffect(() => {
    setWeBuy(exchangeRate.map((rate) => parseFloat((rate) * 1.1).toFixed(2)))
    setWeSell(exchangeRate.map((rate) => parseFloat((rate) * 0.9).toFixed(2)))
  }, [exchangeRate])

  return (
    <>
      <section className="px-28 rounded-2xl m-11">
        <Card>
          <Table hoverable={true} align="center">
            <Head />
            <Table.Body className="divide-y">

              {currency.map((country, index) => (
                <Table.Row >
                  <Table.Cell>{country}</Table.Cell>
                  <Table.Cell>{weBuy[index]}</Table.Cell>
                  <Table.Cell>{exchangeRate[index]}</Table.Cell>
                  <Table.Cell>{weSell[index]}</Table.Cell>
                </Table.Row>
              ))}

            </Table.Body>
          </Table>
          <footer className="flex justify-center items-center mt-5 center ">
            <Footer.Link href="#About Me">Muhaemin Iskandar </Footer.Link>
            &nbsp;for Hacktiv8
          </footer>
        </Card>
      </section>
    </>
  )
}
