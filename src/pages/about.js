import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'

export default () => {
  return (
    <Layout>
      <h2>Rólam</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
        dignissimos odit nostrum est. Cupiditate magnam repudiandae suscipit,
        nulla facere voluptas unde, modi minus earum in assumenda dolores
        molestias vel quisquam.
      </p>
      <h3>Történetem</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita et
        distinctio ratione voluptates quidem maiores autem ex quaerat at, cum
        iusto possimus excepturi laudantium vero accusantium? Corporis eveniet
        saepe impedit
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam rerum
        nemo officia, eos ratione ducimus doloremque sed in pariatur vitae omnis
        sit cupiditate natus assumenda tempora voluptate animi sint quas!
      </p>
      <p>
        <Link to="/">Vissza</Link>
      </p>
    </Layout>
  )
}
