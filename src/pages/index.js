import React from "react"
import Layout from "../components/layout"
import { ExampleButton } from "../components/button"

const index = () => {
  return (
    <Layout>
      <div>
        <h1>This is the homepage</h1>
        <ExampleButton>Click me</ExampleButton>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
          voluptatum nam nemo
        </p>
      </div>
    </Layout>
  )
}

export default index
