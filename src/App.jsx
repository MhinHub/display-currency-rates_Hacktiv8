import React, { useState, useEffect } from "react";
import { Card, Footer, Table } from "flowbite-react";
import Head from "./components/Head";
import ModalAboutMe from "./components/ModalAboutMe";

let country_list = ["IDR", "CAD", "JPY", "CHF", "EUR", "GBP"]
// let BASE_URL = `https://api.currencyfreaks.com/latest?apikey=${import.meta.env.VITE_API_KEY}&symbols=${country_list.join(",")}`
let BASE_URL = `https://api.currencyfreaks.com/latest?apikey=${process.env.API_KEY}&symbols=${country_list.join(",")}`


// console.log(BASE_URL)

export default function App() {
  const [currency, setCurrency] = useState(country_list);
  const [weBuy, setWeBuy] = useState([]);
  const [exchangeRate, setExchangeRate] = useState([]);
  const [weSell, setWeSell] = useState([]);
  const [openModal, setOpenModal] = useState(false);


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
      .catch(console.error)
  }, [])

  // console.log("rate", exchangeRate)

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
                <Table.Row key={Math.random()}>
                  <Table.Cell key={Math.random()}>{country}</Table.Cell>
                  <Table.Cell key={Math.random()}>{weBuy[index]}</Table.Cell>
                  <Table.Cell key={Math.random()}>{exchangeRate[index]}</Table.Cell>
                  <Table.Cell key={Math.random()}>{weSell[index]}</Table.Cell>
                </Table.Row>
              ))}

            </Table.Body>
          </Table>
          <footer className="flex justify-center items-center mt-5 center ">
            <button className="underline text-orange-600" onClick={() => setOpenModal(true)}>Muhaemin Iskandar </button>
            &nbsp;for Hacktiv8
          </footer>
          <ModalAboutMe show={openModal} onClose={() => setOpenModal(false)} />
        </Card>
      </section>
    </>
  )
}
