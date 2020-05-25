import React from "react"
import Layout from "../components/layout"
import styles from "../components/products.module.css"

const products = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>Products page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
          voluptatum nam nemo repellat qui inventore quaerat dolorum dolore
          cupiditate molestiae dolorem, neque itaque fuga? Debitis?
        </p>
      </div>
    </Layout>
  )
}

export default products
