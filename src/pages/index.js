import React from 'react'
import { Link } from 'gatsby'
import Utterances from 'react-utterances'

import Layout from '../components/layout'

const repo = 'spences10/gatsby-netlify-cms'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <Utterances repo={repo} type={'url'} />
  </Layout>
)

export default IndexPage
